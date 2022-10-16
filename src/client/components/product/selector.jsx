import React from 'react'
import * as imagedata from './imagesdata';
import {useSelector} from "react-redux";


export default function SubItem(subcategory ) {
        switch (subcategory) {
          case "NEW":
            return imagedata.NEW;
          case "MUST HAVES":
            return imagedata.womanMH;
          case "BASICS":
            return imagedata.womanBasics;
          case "SHIRTS | BLOUSES":
                return imagedata.womanShirts;
          case "DRESSES | JUMPSUITS":
                return imagedata.womandress;
          case "LATEST":
                return imagedata.manlatest; 
          case "PANTS":
                return imagedata.manpants;
          case "SHIRTS":
                return imagedata.manshirts;
          case "SUITS":
                return imagedata.mansuits; 
          case "GIRL | 6-14 YEARS OLD":
                return imagedata.girl;
          case "BOY | 6-14 YEARS OLD":
                return imagedata.boy; 
          case "BABY GIRL | 6 MONTHS-5 YEARS":
                  return imagedata.babygirl;
          case "BABY BOY | 6 MONTHS-5 YEARS":
                  return imagedata.babyboy;            
          default:
            return null;
        }
      }

