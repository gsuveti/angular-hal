/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Date = string;
export type LocalDateTime = string;
export type CarMutable = string;
export type Description = string;
export type Label = string;
export type Rev = number;
export type Id = number;
export type LocalTime = string;
export type CreatedAt = string;
export type LastModifiedAt = string;
export type CreatedBy = string;
export type LastModifiedBy = string;
export type Plate = string;
export type Type = string;
export type Driver = string;
export type OldDate = string;
export type LocalDate = string;
export type CreatedAt1 = string;
export type LastModifiedAt1 = string;
export type CreatedBy1 = string;
export type LicenseCategory = string;
export type LastModifiedBy1 = string;
export type Employee = string;
export type LastModifiedAt2 = string;
export type Id1 = number;

export interface RouteSheet {
  date?: Date;
  localDateTime?: LocalDateTime;
  carMutable?: CarMutable;
  description?: Description;
  label?: Label;
  carAuditId?: CarAuditId;
  localTime?: LocalTime;
  carEmbedded?: CarEmbedded;
  driver?: Driver;
  oldDate?: OldDate;
  car?: Car;
  localDate?: LocalDate;
  driverAudit?: DriverAudit;
  driverLastModifiedAuditId?: DriverLastModifiedAuditId;
  [k: string]: any;
}
export interface CarAuditId {
  rev?: Rev;
  id?: Id;
  [k: string]: any;
}
export interface CarEmbedded {
  createdAt?: CreatedAt;
  lastModifiedAt?: LastModifiedAt;
  createdBy?: CreatedBy;
  lastModifiedBy?: LastModifiedBy;
  plate?: Plate;
  type?: Type;
  [k: string]: any;
}
export interface Car {
  [k: string]: any;
}
export interface DriverAudit {
  createdAt?: CreatedAt1;
  lastModifiedAt?: LastModifiedAt1;
  createdBy?: CreatedBy1;
  licenseCategory?: LicenseCategory;
  lastModifiedBy?: LastModifiedBy1;
  compositeKey?: CompositeKey;
  employee?: Employee;
  [k: string]: any;
}
export interface CompositeKey {
  [k: string]: any;
}
export interface DriverLastModifiedAuditId {
  lastModifiedAt?: LastModifiedAt2;
  id?: Id1;
  [k: string]: any;
}
