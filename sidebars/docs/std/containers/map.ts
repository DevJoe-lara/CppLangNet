import { SidebarItemConfig } from "@site/sidebars/types";
import {
  cat,
  docsClassCat,
} from "../../../common";

const sidebar: SidebarItemConfig = docsClassCat("map", "std/containers/maps/map", "", [
  "constructors",
  "destructor",
  "op:operator_assign",
  "m:get_allocator",
  cat("Element acccess"),
  "m:at",
  "op:operator_subscript",
  cat("Iterators"),
  ["m:begin", "since-cpp11"],
  ["m:end", "since-cpp11"],
  ["m:rbegin", "since-cpp11"],
  ["m:rend", "since-cpp11"],
  cat("Capacity"),
  "m:empty",
  "m:size",
  "m:max_size",
  cat("Modifiers"),
  "m:clear",
  "m:insert",
  ["m:insert_or_assign", "since-cpp17"],
  ["m:emplace", "since-cpp11"],
  ["m:emplace_hint", "since-cpp11"],
  ["m:try_emplace", "since-cpp17"],
  "m:erase",
  "m:swap",
  ["m:extract", "since-cpp17"],
  ["m:merge", "since-cpp17"],
  cat("Lookup"),
  "m:count",
  "m:find",
  ["m:contains", "since-cpp20"],
  "m:equal_range",
  "m:lower_bound",
  "m:upper_bound",
  cat("Observers"),
  "m:key_comp",
  "m:value_comp",
  "m:value_compare",
]);

export default sidebar;