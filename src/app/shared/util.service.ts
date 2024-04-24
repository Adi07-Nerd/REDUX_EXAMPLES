import { Injectable } from '@angular/core';
import * as moment from 'moment';

/**
 * 
 * @param created string of the date or date object
 * @returns 
 */
export function isToday(created:string | Date){
  return moment(created).isSame(moment().startOf('day'),'d');
}

/**
 * 
 * @param created string of the date or date object
 * @returns 
 */
export function isYesterday(created:string | Date){
  return moment(created).isSame(moment().subtract(1,'days').startOf('day'),'d');
}