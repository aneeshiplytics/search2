import data from "./../data.json";
import {Query} from "./types";
import {FILTER_FIELDS} from "./filterFields";

import jmespath from 'jmespath';
const queries = data as { queries: Query[]};
console.log(queries.queries.length);
const savedQueryids = jmespath.search(queries, "queries[*].savedQueryId");
queries.queries.filter((q) => {
  q.serialization.forEach((group) => {
    if(!group.isFiltersGroup){
        group.groupQuery.forEach((qI) => {
          FILTER_FIELDS.includes()
        })
    }
  })
})