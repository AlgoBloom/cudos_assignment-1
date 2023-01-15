/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.24.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

export type Addr = string;
export interface Config {
  message: string;
  owner: Addr;
  [k: string]: unknown;
}
export type ExecuteMsg = {
  respond: {
    response: string;
    [k: string]: unknown;
  };
} | {
  reset: {
    text: string;
    [k: string]: unknown;
  };
};
export interface InstantiateMsg {
  text: string;
  [k: string]: unknown;
}
export type QueryMsg = {
  get_replies: {
    [k: string]: unknown;
  };
} | {
  get_greeting: {
    [k: string]: unknown;
  };
};
export interface ReplyResponse {
  replies: ReplyInfo[];
  [k: string]: unknown;
}
export interface ReplyInfo {
  addr: Addr;
  reply: Reply;
  [k: string]: unknown;
}
export interface Reply {
  text: string;
  [k: string]: unknown;
}