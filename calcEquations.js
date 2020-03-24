var calcEquation = function (equations, values, queries) {
    let solutions = [];

    let chain = function (current, target, location = null, solution = 1) {
        if (current === target) {
            if (location) { return solution }
            else {
                for (var i = 0; i < equations.length; i++) {
                    if (equations[i].indexOf(target) > -1) { return solution }
                }
                return -1;
            }
        }
        for (var i = 0; i < values.length; i++) {
            if (location === i) { continue }
            //look for a chain in equations, multiply by value if foreward, multiply by 1/value if backward, once the end value is found, add number to solutions and go to next query
            let position = equations[i].indexOf(current);
            if (position === -1) { continue }
            else {
                let out = chain(position === 0 ? equations[i][1] : equations[i][0], target, i, position === 0 ? solution * values[i] : solution / values[i])
                if (out != -1) { return out }
            }
        }
        return -1;
    }
    //iterate through queries
    for (var i = 0; i < queries.length; i++) {
        solutions.push(chain(queries[i][0], queries[i][1]))
    }


    return solutions;
};
//Equations are given in the format A / B = k, where A and B are variables represented as strings, and k is a real number (floating point number). Given some queries, return the answers. If the answer does not exist, return -1.0.

Example:
Given a / b = 2.0, b / c = 3.0.
queries are: a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ? .
return [6.0, 0.5, -1.0, 1.0, -1.0 ].

The input is: vector<pair<string, string>> equations, vector<double>& values, vector<pair<string, string>> queries , where equations.size() == values.size(), and the values are positive. This represents the equations. Return vector<double>.

According to the example above:

equations = [ ["a", "b"], ["b", "c"] ],
values = [2.0, 3.0],
queries = [ ["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"] ]. 
 

The input is always valid. You may assume that evaluating the queries will result in no division by zero and there is no contradiction.
