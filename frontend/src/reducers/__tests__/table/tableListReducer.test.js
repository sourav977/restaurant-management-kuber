import {
    TABLE_LIST_REQUEST,
    TABLE_LIST_SUCCESS,
    TABLE_LIST_FAIL,
    TABLE_LIST_RESET,
} from "../../../constants/tableConstants";
import { tableListReducer } from "../../tableReducers";

/* DATA */
const tables = [
    {
        id: 1,
        name: "Table 01",
        occupied: false,
        createdAt: "2021-05-19T03:54:18.000Z",
    },
    {
        id: 2,
        name: "Table 02",
        occupied: true,
        createdAt: "2021-05-19T03:54:18.000Z",
    },
    {
        id: 3,
        name: "Table 03",
        occupied: false,
        createdAt: "2021-05-19T03:54:18.000Z",
    },
    {
        id: 4,
        name: "Family Table 01",
        occupied: false,
        createdAt: "2021-05-19T03:54:18.000Z",
    },
    {
        id: 5,
        name: "Family Table 02",
        occupied: false,
        createdAt: "2021-05-19T03:54:18.000Z",
    },
];

/* TESTS */
it("handles actions of type TABLE_LIST_REQUEST", () => {
    const action = {
        type: TABLE_LIST_REQUEST,
    };

    const newState = tableListReducer({}, action);

    expect(newState).toEqual({ loading: true, tables: [] });
});

it("handles actions of type TABLE_LIST_SUCCESS", () => {
    const action = {
        type: TABLE_LIST_SUCCESS,
        payload: {
            tables: tables,
            page: 1,
            pages: 2,
        },
    };

    const newState = tableListReducer({}, action);

    expect(newState).toEqual({
        loading: false,
        tables: tables,
        page: 1,
        pages: 2,
    });
});

it("handles actions of type TABLE_LIST_FAIL", () => {
    const action = {
        type: TABLE_LIST_FAIL,
        payload: "Request failed with status code 500",
    };

    const newState = tableListReducer({}, action);

    expect(newState).toEqual({
        loading: false,
        error: "Request failed with status code 500",
    });
});

it("handles actions of type TABLE_LIST_RESET", () => {
    const action = {
        type: TABLE_LIST_RESET,
    };

    const newState = tableListReducer({}, action);

    expect(newState).toEqual({ tables: [] });
});

it("handles action with unknown type", () => {
    const action = {
        type: "UNKNOWN",
    };

    const newState = tableListReducer({}, action);

    expect(newState).toEqual({});
});
