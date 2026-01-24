import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  projectsDropdownOpen = signal(false);

  openProjectsDropdown() {
    this.projectsDropdownOpen.set(true);
  }

  closeProjectsDropdown() {
    this.projectsDropdownOpen.set(false);
  }

  toggleProjectsDropdown() {
    this.projectsDropdownOpen.update(v => !v);
  }
}
