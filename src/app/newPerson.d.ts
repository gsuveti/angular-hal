/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type FirstName = string;
export type LastName = string;
export type Phone = string;
export type Email = string;
export type Year = string;
export type Description = string;
export type LifeEvents = LifeEvent[];
export type Deleted = boolean;
export type Address = string;

export interface Person {
  firstName?: FirstName;
  lastName?: LastName;
  workContact?: WorkContact;
  lifeEvents?: LifeEvents;
  deleted?: Deleted;
  address?: Address;
  contact?: Contact;
  [k: string]: any;
}
export interface WorkContact {
  phone?: Phone;
  email?: Email;
  [k: string]: any;
}
export interface LifeEvent {
  year?: Year;
  description?: Description;
  [k: string]: any;
}
export interface Contact {
  phone?: Phone;
  email?: Email;
  [k: string]: any;
}