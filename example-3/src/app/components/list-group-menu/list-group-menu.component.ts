import { Component } from '@angular/core';

import { RouterLink, RouterLinkActive } from '@angular/router';

import { MenuEntry } from '../../shared/interfaces/menu-entry';

@Component({
  selector: 'app-list-group-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './list-group-menu.component.html',
  styleUrl: './list-group-menu.component.css'
})
export class ListGroupMenuComponent {
  menu: MenuEntry[] = [
    {text: "Component Input Example", routerLink: "component-input-example"}, // routerLink value is the same as the path declared in app.routes.ts
    {text: "@for Directive Example", routerLink: "for-directive-example"},
    {text: "Event Bind Example", routerLink: "event-bind-example"},
    {text: "Simple Data Table", routerLink: "simple-data-table"},
    {text: "Component Output Example", routerLink: "component-output-example"},
    {text: "Template Driven Form", routerLink: "template-driven-form"},
    {text: "Reactive Forms", routerLink: "reactive-forms"},
    {text: "HTTP Client Example", routerLink: "http-client-example"},
    {text: "User Registration Example", routerLink: "user-registration-example"},
    {text: "Restricted Content Example", routerLink: "restricted-content-example"},
    {text: "CRUD Example", routerLink: "crud-example"}
  ]
}
