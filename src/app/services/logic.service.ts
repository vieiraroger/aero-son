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

    return result_planes;
  }

  rotate(planes, angle, x_origin, y_origin) {
    let result_planes = []
    let degrees = angle / 180
    let cos = Math.cos(degrees)
    let sin = Math.sin(degrees)

    console.log(planes);
    console.log(angle);

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
      for(let j=i + 1;j<planes.length;j++) {
        let plane_i = planes[i]
        let plane_j = planes[j]
        let distance = this.distance_bettewen_two_points(plane_i.x, plane_i.y, plane_j.x, plane_j.y)
        if(distance <= minimun_distance) {
          let closest_plane = {"plane": [plane_i, plane_j], "distance": distance}
          closest_planes.push(closest_plane)
        }
      }
    }

    return closest_planes

  }

  calculated_finish_point(plane, time) {
    let x,y;

    let distance = time * plane.velocity
    let degrees = plane.direction * Math.PI / 180
    x = plane.x + distance * Math.sin(degrees)
    y = plane.y + distance * Math.cos(degrees)

    return {"x": x, "y": y}
  }

  calculate_f_x(p1, p2) {
    let a = (p1.y - p2.y)/(p1.x - p2.x)
    console.log(p1, p2)
    let b = - 1 *(p1.x * a - p1.y)
    return {"a": a, "b": b}
  }

  calculate_intersection_point(p1, p2, p3, p4) {
    let f1, f2
    f1 = this.calculate_f_x(p1, p2)
    f2 = this.calculate_f_x(p3, p4)
    /*
    a * x + b = a * x + b
    x (a1 - a2) = b2 - b1

    */
    let x = (f2.b - f1.b)/(f1.a - f2.a)
    let y = f1.a * x + f1.b

    return {"x": x, "y": y}
  }

  calculate_timming(p1, p2, velocity) {
      /*
        S = So + Vt
        S - So = Vt
        Delta(S)/V = t
      */
    return this.distance_bettewen_two_points(p1.x, p1.y, p2.x, p2.y)/velocity
  }

  planes_in_collision_route(planes, minimum_time) {
    let collision_planes = []
    for(let i=0;i<planes.length;i++) {
      let plane_i = planes[i]

      let pi1 = [plane_i.x, plane_i.y]
      let pi2 = this.calculated_finish_point(plane_i, minimum_time)
      console.log(pi1, pi2)

      for(let j=i + 1;i<planes.length;j++) {
        let  plane_j = planes[j]
        let pj1 = [plane_j.x, plane_j.y]
        let pj2 = this.calculated_finish_point(plane_j, minimum_time)
        console.log(pj1, pj2)


        let intersection_point = this.calculate_intersection_point(pi1, pi2, pj1, pj2)
        console.log(intersection_point)

        let t1 = this.calculate_timming(pi1, intersection_point, plane_i.velocity)
        let t2 = this.calculate_timming(pj1, intersection_point, plane_j.velocity)

        console.log(t1, t2)

        if(t1 == t2) {
          //Verificar se o negocio ta certo memo
          collision_planes.push({"plane": [plane_i, plane_j], "distance": t1})
        }

      }
    }

    return collision_planes
  }

  distance_bettewen_two_points(x1, y1, x2, y2) {
    let x_dif = x1 - x2
    let y_dif = y1 - y2
      return Math.sqrt(x_dif * x_dif + y_dif * y_dif)
  }

  to_360_scale(angle){
    return angle % 360;
  }


}
