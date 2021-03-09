import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  allPermissions = [
    {
      id: 1,
      name: "crear roles",
      guard_name: "api",
      created_at: "2021-03-08 18:47:17",
      updated_at: "2021-03-08 18:47:17"
    },
    {
      id: 2,
      name: "ver listado de roles",
      guard_name: "api",
      created_at: "2021-03-08 18:47:17",
      updated_at: "2021-03-08 18:47:17"
    },
    {
      id: 3,
      name: "editar roles",
      guard_name: "api",
      created_at: "2021-03-08 18:47:17",
      updated_at: "2021-03-08 18:47:17"
    },
    {
      id: 4,
      name: "borrar roles",
      guard_name: "api",
      created_at: "2021-03-08 18:47:17",
      updated_at: "2021-03-08 18:47:17"
    },
    {
      id: 5,
      name: "crear agencias",
      guard_name: "api",
      created_at: "2021-03-08 18:47:17",
      updated_at: "2021-03-08 18:47:17"
    },
    {
      id: 6,
      name: "ver listado de agencias",
      guard_name: "api",
      created_at: "2021-03-08 18:47:17",
      updated_at: "2021-03-08 18:47:17"
    },
    {
      id: 7,
      name: "ver detalle de una agencia",
      guard_name: "api",
      created_at: "2021-03-08 18:47:17",
      updated_at: "2021-03-08 18:47:17"
    },
    {
      id: 8,
      name: "editar agencias",
      guard_name: "api",
      created_at: "2021-03-08 18:47:17",
      updated_at: "2021-03-08 18:47:17"
    },
    {
      id: 9,
      name: "borrar agencias",
      guard_name: "api",
      created_at: "2021-03-08 18:47:17",
      updated_at: "2021-03-08 18:47:17"
    },
    {
      id: 10,
      name: "crear usuarios",
      guard_name: "api",
      created_at: "2021-03-08 18:47:17",
      updated_at: "2021-03-08 18:47:17"
    },
    {
      id: 11,
      name: "ver listado de usuarios",
      guard_name: "api",
      created_at: "2021-03-08 18:47:17",
      updated_at: "2021-03-08 18:47:17"
    },
    {
      id: 12,
      name: "ver detalle de un usuario",
      guard_name: "api",
      created_at: "2021-03-08 18:47:17",
      updated_at: "2021-03-08 18:47:17"
    },
    {
      id: 13,
      name: "editar usuarios",
      guard_name: "api",
      created_at: "2021-03-08 18:47:17",
      updated_at: "2021-03-08 18:47:17"
    },
    {
      id: 14,
      name: "borrar usuarios",
      guard_name: "api",
      created_at: "2021-03-08 18:47:17",
      updated_at: "2021-03-08 18:47:17"
    }
  ];

  userPermissions = [
    {
      id: 10,
      name: "crear usuarios",
      guard_name: "api",
      created_at: "2021-03-08 18:47:17",
      updated_at: "2021-03-08 18:47:17"
    },
    {
      id: 11,
      name: "ver listado de usuarios",
      guard_name: "api",
      created_at: "2021-03-08 18:47:17",
      updated_at: "2021-03-08 18:47:17"
    },
    {
      id: 12,
      name: "ver detalle de un usuario",
      guard_name: "api",
      created_at: "2021-03-08 18:47:17",
      updated_at: "2021-03-08 18:47:17"
    },
    {
      id: 13,
      name: "editar usuarios",
      guard_name: "api",
      created_at: "2021-03-08 18:47:17",
      updated_at: "2021-03-08 18:47:17"
    },
    {
      id: 14,
      name: "borrar usuarios",
      guard_name: "api",
      created_at: "2021-03-08 18:47:17",
      updated_at: "2021-03-08 18:47:17"
    }
  ];

  constructor() {
    console.log(this.allPermissions);
    console.log(this.userPermissions);
  }
}
