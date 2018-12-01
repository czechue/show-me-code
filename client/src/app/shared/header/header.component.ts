import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    template: `
        <header class="header">
            <nav class="navbar">
                <div class="container wrapper navbar-container">
                    <a class="navbar-logo" href="#"> Pokaż mi Kod </a>

                    <ul class="navbar-nav">
                        <li class="navbar-item active">
                            <a class="navbar-link" routerLink="projects">
                                Projekty
                            </a>
                        </li>
                        <li class="navbar-item">
                            <a class="navbar-link" href="#">FAQ</a>
                        </li>
                        <li class="navbar-item">
                            <a class="navbar-link" href="/auth/google">
                                Login
                            </a>
                        </li>
                        <li class="navbar-item">
                            <a class="navbar-link" href="/api/logout">
                                Logout
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    `,
    styleUrls: ['header.component.scss']
})
export class HeaderComponent {}
