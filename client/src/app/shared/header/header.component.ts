import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    template: `
        <header class="header">
            <nav class="navbar">
                <div class="container wrapper">
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarTogglerDemo03"
                        aria-controls="navbarToggler"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <a class="navbar-brand header__title" href="#">
                        Pokaż mi Kod
                    </a>
                    <div
                        class="collapse navbar-collapse text-center"
                        id="navbarTogglerDemo03"
                    >
                        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li class="nav-item active">
                                <a class="nav-link" routerLink="projects">
                                    Projects
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Jak zacząć</a>
                            </li>
                        </ul>

                        <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" href="/auth/google">
                                    Zaloguj się z Google
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/api/logout">
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    `,
    styleUrls: ['header.component.scss']
})
export class HeaderComponent {}
