import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LogicService {

  constructor() { }

  polar_to_cartesian(distance, angle) {
    let degrees = angle * Math.PI / 180;
    let sin = Math.sin(degrees);
    let cos = Math.cos(degrees);
  
    return [distance*cos, distance*sin]
  }
  
  move(planes, x, y) {
    let result_planes = []
  
    for(let i=0;i<planes.length;i++) {
      let plane = planes[i]
      plane.x += x;
      plane.y += y;
      result_planes.push(plane)
    }
  
    return result_planes
  }
  
  rotate(planes, angle, x_origin, y_origin) {
    let result_planes = []
    let degrees = angle * Math.PI / 180
    let cos = Math.cos(degrees)
    let sin = Math.sin(degrees)
    
    for(let i=0;i<planes.length;i++) {
      let plane = planes[i]
      let x_relative = plane.x - x_origin
      let y_relative = plane.y - y_origin
  
      let x_final = x_relative * cos - y_relative * sin
      let y_final = y_relative * cos + x_relative * sin
  
      plane.x = x_final + x_origin
      plane.y = y_final + y_origin
  
      result_planes.push(plane)
    }
  
    return result_planes
  }
  
  //Decimal
  stagger_decimal(planes, x, y) {
    let result_planes = []
  
    for(let i=0;i<planes.length;i++) {
      let plane = planes[i]
      plane.x *= x;
      plane.y *= y;
      result_planes.push(plane)
    }
  
    return result_planes
  }
  
  planes_closest_to_airport(airport, planes, minimun_distance) {
    let closest_planes = []
  
    for(let i=0;i<planes.length;i++) {
      let plane = planes[i]
      let distance = this.distance_bettewen_two_points(airport.x, airport.y, plane.x, plane.y)
      if(distance <= minimun_distance) {
        let closest_plane = {"plane": plane, "distance": distance}
        closest_planes.push(closest_plane);
      }
  
    }
  
    return closest_planes
  }
  
  planes_closest_to_planes(planes, minimun_distance) {
    let closest_planes = []
  
    for(let i=0;i<planes.length;i++) {
      for(let j=i + 1;i<planes.length;j++) {
        let plane_i = planes[i]
        let plane_j = planes[j]
        let distance = this.distance_bettewen_two_points(plane_i.x, plane_i.y, plane_j.x, plane_j.y)
        if(distance <= minimun_distance) {
          let closest_plane = {"planes": [plane_i, plane_j], "distance": distance}
          closest_planes.push(closest_plane)
        }
      }
    }
  
    return closest_planes
  
  }
  
  planes_in_collision_route(planes, minimum_time) {
  
    for(let i=0;i<minimum_time;i++) {
      // move um, verifica se bateu na posicao que ele foi.
  
    }
  
  }
  
  distance_bettewen_two_points(x1, y1, x2, y2) {
    let x_dif = x1 - x2
    let y_dif = y1 - y2
      return Math.sqrt(x_dif * x_dif + y_dif * y_dif)
  }
  

}
