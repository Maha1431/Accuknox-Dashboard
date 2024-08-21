
import React from "react";
import Category from "./Category";
import GenerateChart from "./GenereteChart";
import RegisteryChart from "./RegisteryChart";
import userStore from "../userwidgetStore";

const Dashboard = () => {
  const categories = userStore((state) => state.categories);
  const searchResults = userStore((state) => state.searchResults);

  return (
    <>
      <div className="p-8 min-h-screen z-0">
        {searchResults.length > 0 ? (
          <div>
            <h2 className="text-xl font-bold text-gray-700 mb-4">
              Search Results
            </h2>
            <div className="grid grid-cols-3 gap-4 h-64">
              {searchResults.map((widget) => (
                <div key={widget.id} className="bg-white p-4 rounded shadow">
                  <h3 className="font-bold text-gray-800">{widget.name}</h3>
                  <p>{widget.text}</p>
                  <p className="text-sm text-gray-500">
                    Category: {widget.category}
                  </p>

                  {/* Conditionally render the chart if chartData is present */}
                  {widget.name === "Cloud Accounts" &&
                    Object.keys(widget.chartData).length > 0 && (
                      <GenerateChart
                        labels={[
                          `Connected (${widget.chartData.connected})`,
                          `Not Connected (${widget.chartData.notConnected})`,
                        ]}
                        dataValues={Object.values(widget.chartData)}
                        colors={["#cbd6f5", "#5a80f2"]}
                      />
                    )}

                  {widget.name === "Cloud Account Risk Assessment" &&
                    Object.keys(widget.chartData).length > 0 && (
                      <GenerateChart
                        labels={[
                          `Passed (${widget.chartData.passed})`,
                          `Failed (${widget.chartData.failed})`,
                          `Warning (${widget.chartData.warning})`,
                          `Not Available (${widget.chartData.notAvailable})`,
                        ]}
                        dataValues={Object.values(widget.chartData)}
                        colors={["#4CAF50", "#FF5252", "#FFC107", "#9E9E9E"]}
                      />
                    )}

                  {(widget.name === "Image Risk Assessment" ||
                    widget.name === "Image Security Issues") &&
                    Object.keys(widget.chartData).length > 0 && (
                      <div className="ml-0">
                        {" "}
                        <h1 className="flex items-center gap-2 text-md truncate mb-1">
                          <p className="text-xl font-bold">
                            {widget.chartData.total}{" "}
                          </p>{" "}
                          Total{" "}
                          {widget.name === "Image Risk Assessment"
                            ? "Vulnerabilities"
                            : "Images"}
                        </h1>
                        <RegisteryChart
                          chartData={widget.chartData}
                        />
                      </div>
                    )}
                </div>
              ))}
            </div>
          </div>
        ) : (
          categories.map((category) => (
            <Category key={category.id} category={category} />
          ))
        )}
      </div>
    </>
  );
};

export default Dashboard;
