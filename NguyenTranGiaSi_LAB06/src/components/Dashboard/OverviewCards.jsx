import React from "react";

const OverviewCards = ({ data, loading, error, formatCurrency }) => {
    if (loading) {
        return (
            <div className="grid grid-cols-3 gap-4 my-6">
                <div className="p-4 bg-pink-100 rounded-lg shadow animate-pulse">
                    <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
                    <div className="h-8 bg-gray-300 rounded w-2/3"></div>
                </div>
                <div className="p-4 bg-blue-100 rounded-lg shadow animate-pulse">
                    <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
                    <div className="h-8 bg-gray-300 rounded w-2/3"></div>
                </div>
                <div className="p-4 bg-green-100 rounded-lg shadow animate-pulse">
                    <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
                    <div className="h-8 bg-gray-300 rounded w-2/3"></div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-red-100 border-l-4 border-red-500 p-4 my-6">
                <p className="text-red-700">{error}</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-3 gap-4 my-6">
            <div className="p-4 bg-pink-100 rounded-lg shadow">
                <p className="text-gray-500">Turnover</p>
                <h3 className="text-2xl font-bold">{formatCurrency(data.turnover.value)}</h3>
                <br />
                <p className="text-1xl">
                    <span className={data.turnover.change >= 0 ? "text-green-500" : "text-red-500"}>
                        {data.turnover.change >= 0 ? "+" : ""}{data.turnover.change}%
                    </span> period of change
                </p>
            </div>
            <div className="p-4 bg-blue-100 rounded-lg shadow">
                <p className="text-gray-500">Profit</p>
                <h3 className="text-2xl font-bold">{formatCurrency(data.profit.value)}</h3>
                <br />
                <p className="text-1xl">
                    <span className={data.profit.change >= 0 ? "text-green-500" : "text-red-500"}>
                        {data.profit.change >= 0 ? "+" : ""}{data.profit.change}%
                    </span> period of change
                </p>
            </div>
            <div className="p-4 bg-green-100 rounded-lg shadow">
                <p className="text-gray-500">New Customers</p>
                <h3 className="text-2xl font-bold">{data.newCustomers.value}</h3>
                <br />
                <p className="text-1xl">
                    <span className={data.newCustomers.change >= 0 ? "text-green-500" : "text-red-500"}>
                        {data.newCustomers.change >= 0 ? "+" : ""}{data.newCustomers.change}%
                    </span> period of change
                </p>
            </div>
        </div>
    );
};

export default OverviewCards;