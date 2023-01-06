use schemars::JsonSchema;
use serde::{Deserialize, Serialize};

use cosmwasm_std::Addr;
use cw_storage_plus::{Item, Map};

#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
// pub struct State {
//     pub count: i32,
//     pub owner: Addr,
// }
pub struct Config {
    pub owner: Addr,
    pub greeting: String
}

// pub const STATE: Item<State> = Item::new("state");
pub const CONFIG: Item<Config> = Item::new("config");

#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub struct Reply {
    pub text: String
}

pub const REPLY: Map<&Addr, Reply> = Map::new("reply");