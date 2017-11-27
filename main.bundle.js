webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-fab.mat-fab {\r\n  position: fixed;\r\n  right: 20px;\r\n  bottom: 40px;\r\n  z-index: 1000;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"example-container\">\n  <button mat-fab *ngIf=\"authService.isLoggedIn\" class=\"example-fab\"  (click)=\"sidenav.open()\">\n    <mat-icon>add</mat-icon>\n  </button>\n  <mat-sidenav #sidenav class=\"example-sidenav\">\n    <mat-list>\n      <mat-list-item>Nom : Admin</mat-list-item>\n      <mat-list-item>\n        <button mat-raised-button color=\"warn\" (click)=\"logout()\">Logout</button>\n      </mat-list-item>\n    </mat-list>\n  </mat-sidenav>\n  <div class=\"example-sidenav-content\">\n    <mat-toolbar color=\"primary\">\n      <span  routerLink=\"/pokemon/all\" >Pokémons</span>\n      <span class=\"example-spacer\"></span>\n      <app-pokemon-search *ngIf=\"authService.isLoggedIn\">\n      </app-pokemon-search>\n    </mat-toolbar>\n    <router-outlet></router-outlet>\n  </div>\n</mat-sidenav-container>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_a_b_s_synchroniser_service__ = __webpack_require__("../../../../../src/app/services/a-b-s-synchroniser.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(snackBar, aBSSynchroniserService, router, authService) {
        this.snackBar = snackBar;
        this.aBSSynchroniserService = aBSSynchroniserService;
        this.router = router;
        this.authService = authService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('ngOnInit !');
        window.addEventListener("online", function () {
            _this.aBSSynchroniserService.sync();
            _this.snackBar.open('You are online. All data is synced.', 'Ok', { duration: 3000 });
        }, false);
        window.addEventListener("offline", function () {
            _this.snackBar.open('You are offline. All changes will be synced when you will go online again.', 'Close');
        }, false);
    };
    AppComponent.prototype.logout = function () {
        this.authService.logout();
        this.router.navigate(['/login']);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_4__services_a_b_s_synchroniser_service__["a" /* ABSSynchroniserService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_in_memory_web_api__ = __webpack_require__("../../../../angular-in-memory-web-api/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_pokemons_service__ = __webpack_require__("../../../../../src/app/services/pokemons.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_a_b_s_dispatcher_service__ = __webpack_require__("../../../../../src/app/services/a-b-s-dispatcher.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_a_b_s_synchroniser_service__ = __webpack_require__("../../../../../src/app/services/a-b-s-synchroniser.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_a_b_s_file_store_service__ = __webpack_require__("../../../../../src/app/services/a-b-s-file-store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_network_check_status_service__ = __webpack_require__("../../../../../src/app/services/network-check-status.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_cache_storage_service__ = __webpack_require__("../../../../../src/app/services/cache-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__directives_shadow_card_directive__ = __webpack_require__("../../../../../src/app/directives/shadow-card.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pipes_pokemon_type_color_pipe_pipe__ = __webpack_require__("../../../../../src/app/pipes/pokemon-type-color-pipe.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_list_pokemon_list_pokemon_component__ = __webpack_require__("../../../../../src/app/components/list-pokemon/list-pokemon.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_service_worker__ = __webpack_require__("../../../service-worker/esm5/service-worker.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_detail_pokemon_detail_pokemon_component__ = __webpack_require__("../../../../../src/app/components/detail-pokemon/detail-pokemon.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_pokemon_form_pokemon_form_component__ = __webpack_require__("../../../../../src/app/components/pokemon-form/pokemon-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_in_memory_data_service__ = __webpack_require__("../../../../../src/app/services/in-memory-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__directives_dnd_directive__ = __webpack_require__("../../../../../src/app/directives/dnd.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_dnd_dnd_component__ = __webpack_require__("../../../../../src/app/components/dnd/dnd.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_pokemon_search_pokemon_search_component__ = __webpack_require__("../../../../../src/app/components/pokemon-search/pokemon-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_pokemon_filter_pokemon_filter_component__ = __webpack_require__("../../../../../src/app/components/pokemon-filter/pokemon-filter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_add_user_add_user_component__ = __webpack_require__("../../../../../src/app/components/add-user/add-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_pokemon_add_pokemon_add_component__ = __webpack_require__("../../../../../src/app/components/pokemon-add/pokemon-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_file_store_file_store_component__ = __webpack_require__("../../../../../src/app/components/file-store/file-store.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pipes_safe_pipe__ = __webpack_require__("../../../../../src/app/pipes/safe.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { HttpSwProxyModule } from 'ng-http-sw-proxy';




// import {PouchdbService} from './services/pouchdb.service';


























var appRoutes = [
    {
        path: 'pokemon',
        canActivate: [__WEBPACK_IMPORTED_MODULE_18__services_auth_guard_service__["a" /* AuthGuard */]],
        children: [
            { path: 'all', component: __WEBPACK_IMPORTED_MODULE_17__components_list_pokemon_list_pokemon_component__["a" /* ListPokemonComponent */] },
            { path: 'edit/:id', component: __WEBPACK_IMPORTED_MODULE_23__components_pokemon_form_pokemon_form_component__["a" /* PokemonFormComponent */] },
            { path: ':id', component: __WEBPACK_IMPORTED_MODULE_21__components_detail_pokemon_detail_pokemon_component__["a" /* DetailPokemonComponent */] }
        ]
    },
    {
        path: 'fileStore',
        component: __WEBPACK_IMPORTED_MODULE_32__components_file_store_file_store_component__["a" /* FileStoreComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_18__services_auth_guard_service__["a" /* AuthGuard */]]
    },
    { path: '', redirectTo: 'pokemon/all', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_29__components_login_login_component__["a" /* LoginComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_22__components_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_15__directives_shadow_card_directive__["a" /* ShadowCardDirective */],
                __WEBPACK_IMPORTED_MODULE_16__pipes_pokemon_type_color_pipe_pipe__["a" /* PokemonTypeColorPipePipe */],
                __WEBPACK_IMPORTED_MODULE_17__components_list_pokemon_list_pokemon_component__["a" /* ListPokemonComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_detail_pokemon_detail_pokemon_component__["a" /* DetailPokemonComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_pokemon_form_pokemon_form_component__["a" /* PokemonFormComponent */],
                __WEBPACK_IMPORTED_MODULE_25__directives_dnd_directive__["a" /* DndDirective */],
                __WEBPACK_IMPORTED_MODULE_26__components_dnd_dnd_component__["a" /* DndComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_pokemon_search_pokemon_search_component__["a" /* PokemonSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_pokemon_filter_pokemon_filter_component__["a" /* PokemonFilterComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_add_user_add_user_component__["a" /* AddUserComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_pokemon_add_pokemon_add_component__["b" /* PokemonAddComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_pokemon_add_pokemon_add_component__["a" /* DialogContentExampleDialog */],
                __WEBPACK_IMPORTED_MODULE_32__components_file_store_file_store_component__["a" /* FileStoreComponent */],
                __WEBPACK_IMPORTED_MODULE_33__pipes_safe_pipe__["a" /* SafePipe */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
                // HttpSwProxyModule,
                __WEBPACK_IMPORTED_MODULE_4_angular_in_memory_web_api__["a" /* InMemoryWebApiModule */].forRoot(__WEBPACK_IMPORTED_MODULE_24__services_in_memory_data_service__["a" /* InMemoryDataService */]),
                // RouterModule.forChild([{ path: 'login', component: LoginComponent }]),
                __WEBPACK_IMPORTED_MODULE_20__angular_service_worker__["a" /* ServiceWorkerModule */].register('/ngsw-worker.js'),
                __WEBPACK_IMPORTED_MODULE_34__angular_http__["d" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__["b" /* NoopAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["r" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["j" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["k" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["q" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["o" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["m" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["l" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["e" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["i" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["d" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["n" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["s" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["g" /* MatDialogModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__services_pokemons_service__["a" /* PokemonsService */],
                __WEBPACK_IMPORTED_MODULE_11__services_cache_storage_service__["a" /* CacheStorageService */],
                __WEBPACK_IMPORTED_MODULE_9__services_users_service__["a" /* UsersService */],
                __WEBPACK_IMPORTED_MODULE_18__services_auth_guard_service__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_19__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_10__services_network_check_status_service__["a" /* NetworkCheckStatusService */],
                __WEBPACK_IMPORTED_MODULE_6__services_a_b_s_dispatcher_service__["a" /* ABSDispatcherService */],
                __WEBPACK_IMPORTED_MODULE_7__services_a_b_s_synchroniser_service__["a" /* ABSSynchroniserService */],
                __WEBPACK_IMPORTED_MODULE_8__services_a_b_s_file_store_service__["a" /* ABSFileStoreService */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__["b" /* NoopAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["r" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["j" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["k" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["q" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["o" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["m" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["l" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["e" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["i" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["d" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["n" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["s" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["g" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_31__components_pokemon_add_pokemon_add_component__["a" /* DialogContentExampleDialog */],
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_31__components_pokemon_add_pokemon_add_component__["a" /* DialogContentExampleDialog */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/classes/mock-pokemons.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return POKEMONS; });
var POKEMONS = [
    {
        id: 1,
        name: "Bulbizarre",
        hp: 25,
        cp: 5,
        picture: "./assets/images/bulbizarre.png",
        types: ["Plante", "Poison"],
        created: new Date()
    },
    {
        id: 2,
        name: "Salamèche",
        hp: 28,
        cp: 6,
        picture: "./assets/images/salameche.png",
        types: ["Feu"],
        created: new Date()
    },
    {
        id: 3,
        name: "Carapuce",
        hp: 21,
        cp: 4,
        picture: "./assets/images/carapuce.png",
        types: ["Eau"],
        created: new Date()
    },
    {
        id: 4,
        name: "Aspicot",
        hp: 16,
        cp: 2,
        picture: "./assets/images/aspicot.png",
        types: ["Insecte", "Poison"],
        created: new Date()
    },
    {
        id: 5,
        name: "Roucool",
        hp: 30,
        cp: 7,
        picture: "./assets/images/roucool.png",
        types: ["Normal", "Vol"],
        created: new Date()
    },
    {
        id: 6,
        name: "Rattata",
        hp: 18,
        cp: 6,
        picture: "./assets/images/rattata.png",
        types: ["Normal"],
        created: new Date()
    },
    {
        id: 7,
        name: "Piafabec",
        hp: 14,
        cp: 5,
        picture: "./assets/images/piafabec.png",
        types: ["Normal", "Vol"],
        created: new Date()
    },
    {
        id: 8,
        name: "Abo",
        hp: 16,
        cp: 4,
        picture: "./assets/images/abo.png",
        types: ["Poison"],
        created: new Date()
    },
    {
        id: 9,
        name: "Pikachu",
        hp: 21,
        cp: 7,
        picture: "./assets/images/pikachu.png",
        types: ["Electrik"],
        created: new Date()
    },
    {
        id: 10,
        name: "Sabelette",
        hp: 19,
        cp: 3,
        picture: "./assets/images/sabelette.png",
        types: ["Normal"],
        created: new Date()
    },
    {
        id: 11,
        name: "Mélofée",
        hp: 25,
        cp: 5,
        picture: "./assets/images/melofee.png",
        types: ["Fée"],
        created: new Date()
    },
    {
        id: 12,
        name: "Groupix",
        hp: 17,
        cp: 8,
        picture: "./assets/images/groupix.png",
        types: ["Feu"],
        created: new Date()
    }
];


/***/ }),

/***/ "../../../../../src/app/classes/mock-users.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return USERS; });
var USERS = [
    {
        id: 100,
        name: {
            first: 'admin',
            last: 'ADMIN'
        },
        email: 'admin@sifast.com',
        verification: {
            password: 'admin100',
            passwordConfirm: 'admin100'
        }
    },
    {
        id: 0,
        name: {
            first: 'Mohamed',
            last: 'GONTARA'
        },
        email: 'mohamed.gontara@sifast.com',
        verification: {
            password: 'medmed20',
            passwordConfirm: 'medmed20'
        }
    },
    {
        id: 1,
        name: {
            first: 'Mohamed',
            last: 'BOUAZIZ'
        },
        email: 'mohamed.bouaziz@sifast.com',
        verification: {
            password: 'medmed20',
            passwordConfirm: 'medmed20'
        }
    }
];


/***/ }),

/***/ "../../../../../src/app/components/add-user/add-user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/add-user/add-user.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  add-user works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/add-user/add-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddUserComponent = (function () {
    function AddUserComponent() {
    }
    AddUserComponent.prototype.ngOnInit = function () {
    };
    AddUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-user',
            template: __webpack_require__("../../../../../src/app/components/add-user/add-user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/add-user/add-user.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddUserComponent);
    return AddUserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/detail-pokemon/detail-pokemon.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pokemonCard{\r\n  width: 400px;\r\n  height: 400px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/detail-pokemon/detail-pokemon.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf='pokemon'>\n  <button mat-raised-button color=\"warn\" class=\"goBackButton\" routerLink=\"/pokemon/all\">Retour</button>\n  <button mat-raised-button color=\"primary\" class=\"goBackButton\"routerLink=\"/pokemon/edit/{{pokemon.id}}\">Modifier</button>\n  <mat-grid-list  cols=\"2\" rowHeight=\"2:1\">\n    <mat-grid-tile>\n      <mat-card class=\"pokemonCard\">\n        <img mat-card-image src={{pokemon.picture}}>\n      </mat-card>\n    </mat-grid-tile>\n    <mat-grid-tile>\n      <mat-card>\n        <table>\n          <tr>\n            <th mat-sort-header=\"name\">Name</th>\n            <td>{{pokemon.name}}</td>\n          </tr>\n          <tr>\n            <th mat-sort-header=\"name\">Points de vie</th>\n            <td>{{pokemon.hp}}</td>\n          </tr>\n          <tr>\n            <th mat-sort-header=\"name\">Dégâts</th>\n            <td>{{pokemon.cp}}</td>\n          </tr>\n          <tr>\n            <th mat-sort-header=\"name\">Types</th>\n            <mat-chip-list>\n              <mat-chip *ngFor=\"let type of pokemon.types\" color=\"{{ type | pokemonTypeColor }}\" selected=\"true\">{{type}}</mat-chip>\n            </mat-chip-list>\n          </tr>\n          <tr>\n            <th mat-sort-header=\"name\">Date de création</th>\n            <td><span>{{ pokemon.created | date:\"dd/MM/yyyy\" }}</span></td>\n          </tr>\n        </table>\n      </mat-card>\n    </mat-grid-tile>\n  </mat-grid-list>\n</div>\n<mat-progress-bar color=\"warn\" *ngIf=\"!pokemon\" mode=\"query\"></mat-progress-bar>\n"

/***/ }),

/***/ "../../../../../src/app/components/detail-pokemon/detail-pokemon.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPokemonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_pokemons_service__ = __webpack_require__("../../../../../src/app/services/pokemons.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailPokemonComponent = (function () {
    function DetailPokemonComponent(route, pokemonsService) {
        this.route = route;
        this.pokemonsService = pokemonsService;
        this.pokemon = null; // pokémon à afficher dans le template
    }
    // on injecte 'route' pour récupérer les paramètres de l'url, et 'router' pour rediriger l'utilisateur.
    DetailPokemonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.pokemonsService.getPokemon(id).then(function (pokemon) { return _this.pokemon = pokemon; });
        });
    };
    DetailPokemonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-detail-pokemon',
            template: __webpack_require__("../../../../../src/app/components/detail-pokemon/detail-pokemon.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/detail-pokemon/detail-pokemon.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__services_pokemons_service__["a" /* PokemonsService */]])
    ], DetailPokemonComponent);
    return DetailPokemonComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dnd/dnd.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".inputFile {\r\n  opacity: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 1;\r\n  position: absolute;\r\n  left: 0px;\r\n  top: 0px;\r\n}\r\n\r\n.pokemonCard{\r\n  width: 400px;\r\n  height: 400px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dnd/dnd.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<mat-card appDnd (filesChangeEmiter)=\"onFilesChange($event)\" (filesInvalidEmiter)=\"onFileInvalids($event)\" [allowed_extensions]=\"['png', 'jpg', 'bmp']\">-->\n<mat-card class=\"pokemonCard\" appDnd (filesChangeEmiter)=\"onFilesChange($event)\" (filesInvalidEmiter)=\"onFileInvalids($event)\" (imgDropSrc)=\"onDropImage($event)\">\n  <input type=\"file\" class=\"inputFile\" (change)=\"fileChangeEvent($event)\">\n  <img mat-card-image src={{imgOriginalSrc}}>\n</mat-card>\n<mat-hint align=\"start\">Modifier image ...</mat-hint>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/dnd/dnd.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DndComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_a_b_s_file_store_service__ = __webpack_require__("../../../../../src/app/services/a-b-s-file-store.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DndComponent = (function () {
    function DndComponent(aBSFileStoreService) {
        this.aBSFileStoreService = aBSFileStoreService;
        this.imgOriginalOut = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    DndComponent.prototype.onFilesChange = function (fileList) {
        this.fileList = fileList;
    };
    DndComponent.prototype.onFileInvalids = function (fileList) {
        this.invalidFiles = fileList;
    };
    DndComponent.prototype.onDropImage = function (imgSrc) {
        this.imgOriginalSrc = imgSrc;
        this.imgOriginalOut.emit(this.imgOriginalSrc);
    };
    DndComponent.prototype.fileChangeEvent = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            this.aBSFileStoreService.saveFileAsAtt(event.target.files[0], event.target.files[0].name);
            console.log("file", event.target.files[0]);
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.imgOriginalSrc = reader.result;
                _this.imgOriginalOut.emit(_this.imgOriginalSrc);
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], DndComponent.prototype, "imgOriginalSrc", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], DndComponent.prototype, "imgOriginalOut", void 0);
    DndComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dnd',
            template: __webpack_require__("../../../../../src/app/components/dnd/dnd.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dnd/dnd.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_a_b_s_file_store_service__["a" /* ABSFileStoreService */]])
    ], DndComponent);
    return DndComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/file-store/file-store.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/file-store/file-store.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  file-store works!\n</p>\n<input type=\"file\" (change)=\"uploadFile($event)\">\n<iframe *ngIf=\"videoSrc != ''\" [src]=\"videoSrc | safe\" frameborder=\"0\" allowfullscreen></iframe>\n<iframe *ngIf=\"docSrc != ''\" [src]=\"docSrc | safe\"  width=\"100%\" height=\"800\"></iframe>\n<img *ngIf=\"imgSrc != ''\" [src]=\"imgSrc|safe\">\n<mat-list>\n  <mat-list-item *ngFor=\"let file of filesLists\" (click)=\"showFile(file.blob)\">{{file.name}}</mat-list-item>\n</mat-list>\n"

/***/ }),

/***/ "../../../../../src/app/components/file-store/file-store.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileStoreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_a_b_s_file_store_service__ = __webpack_require__("../../../../../src/app/services/a-b-s-file-store.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FileStoreComponent = (function () {
    function FileStoreComponent(aBSFileStoreService) {
        this.aBSFileStoreService = aBSFileStoreService;
        this.filesLists = ['file1.png', 'file2.mp3'];
        this.imgSrc = '';
        this.videoSrc = '';
        this.docSrc = '';
    }
    FileStoreComponent.prototype.ngOnInit = function () {
        this.getlist();
    };
    FileStoreComponent.prototype.getlist = function () {
        var _this = this;
        return this.aBSFileStoreService.getAllFiles().then(function (res) {
            console.table(res);
            console.log("hi");
            _this.filesLists = [];
            for (var key in res) {
                _this.filesLists.push({
                    name: key,
                    _id: key,
                    blob: res[key]
                });
            }
            console.log("files :::", _this.filesLists);
        });
    };
    FileStoreComponent.prototype.uploadFile = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            console.log("file", event.target.files[0]);
            this.aBSFileStoreService.saveFileAsAtt(event.target.files[0], event.target.files[0].name).then(function (res) { return _this.getlist(); });
        }
    };
    FileStoreComponent.prototype.showFile = function (file) {
        switch (file.content_type) {
            case "image/png":
                this.showImage(file.data);
                break;
            case "video/mp4":
                this.showVideo(file.data);
                break;
            case "audio/mp3":
                this.showVideo(file.data);
                break;
            default:
                this.showDocs(file.data);
        }
        console.log(file);
    };
    FileStoreComponent.prototype.showImage = function (image) {
        console.log(image);
        this.imgSrc = window.URL.createObjectURL(image);
        // var reader = new FileReader();
        //
        // reader.onload = (event) => {
        //   this.imgSrc = reader.result;
        //   console.log("img", this.imgSrc);
        // };
        //
        // reader.readAsDataURL(image);
    };
    FileStoreComponent.prototype.showVideo = function (video) {
        console.log(video);
        this.videoSrc = window.URL.createObjectURL(video);
    };
    FileStoreComponent.prototype.showDocs = function (doc) {
        console.log(doc);
        this.docSrc = window.URL.createObjectURL(doc);
        console.log("hi", this.docSrc);
    };
    FileStoreComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-file-store',
            template: __webpack_require__("../../../../../src/app/components/file-store/file-store.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/file-store/file-store.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_a_b_s_file_store_service__["a" /* ABSFileStoreService */]])
    ], FileStoreComponent);
    return FileStoreComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/list-pokemon/list-pokemon.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".hrefCard:link {\r\n  text-decoration: none;\r\n}\r\n\r\n.noPokemonToShow {\r\n  text-align: center;\r\n  padding-top: 100px;\r\n  font-size: larger;\r\n}\r\n\r\n.deleteButton {\r\n  z-index: 1000;\r\n  position: absolute;\r\n  right: 46px;\r\n  top: 46px;\r\n}\r\n\r\n/*@keyframes shake {*/\r\n/*10%, 90% {*/\r\n/*transform: translate3d(-1px, 0, 0);*/\r\n/*}*/\r\n\r\n/*20%, 80% {*/\r\n/*transform: translate3d(2px, 0, 0);*/\r\n/*}*/\r\n\r\n/*30%, 50%, 70% {*/\r\n/*transform: translate3d(-4px, 0, 0);*/\r\n/*}*/\r\n\r\n/*40%, 60% {*/\r\n/*transform: translate3d(4px, 0, 0);*/\r\n/*}*/\r\n/*}*/\r\n@-webkit-keyframes shake {\r\n  2% {\r\n    -webkit-transform: translate(0.5px, -1.5px) rotate(-0.5deg);\r\n            transform: translate(0.5px, -1.5px) rotate(-0.5deg);\r\n  }\r\n\r\n  4% {\r\n    -webkit-transform: translate(0.5px, 1.5px) rotate(1.5deg);\r\n            transform: translate(0.5px, 1.5px) rotate(1.5deg);\r\n  }\r\n  6% {\r\n    -webkit-transform: translate(1.5px, 1.5px) rotate(1.5deg);\r\n            transform: translate(1.5px, 1.5px) rotate(1.5deg);\r\n  }\r\n  8% {\r\n    -webkit-transform: translate(2.5px, 1.5px) rotate(0.5deg);\r\n            transform: translate(2.5px, 1.5px) rotate(0.5deg);\r\n  }\r\n  10% {\r\n    -webkit-transform: translate(0.5px, 2.5px) rotate(0.5deg);\r\n            transform: translate(0.5px, 2.5px) rotate(0.5deg);\r\n  }\r\n  12% {\r\n    -webkit-transform: translate(1.5px, 1.5px) rotate(0.5deg);\r\n            transform: translate(1.5px, 1.5px) rotate(0.5deg);\r\n  }\r\n  14% {\r\n    -webkit-transform: translate(0.5px, 0.5px) rotate(0.5deg);\r\n            transform: translate(0.5px, 0.5px) rotate(0.5deg);\r\n  }\r\n  16% {\r\n    -webkit-transform: translate(-1.5px, -0.5px) rotate(1.5deg);\r\n            transform: translate(-1.5px, -0.5px) rotate(1.5deg);\r\n  }\r\n  18% {\r\n    -webkit-transform: translate(0.5px, 0.5px) rotate(1.5deg);\r\n            transform: translate(0.5px, 0.5px) rotate(1.5deg);\r\n  }\r\n  20% {\r\n    -webkit-transform: translate(2.5px, 2.5px) rotate(1.5deg);\r\n            transform: translate(2.5px, 2.5px) rotate(1.5deg);\r\n  }\r\n  22% {\r\n    -webkit-transform: translate(0.5px, -1.5px) rotate(1.5deg);\r\n            transform: translate(0.5px, -1.5px) rotate(1.5deg);\r\n  }\r\n  24% {\r\n    -webkit-transform: translate(-1.5px, 1.5px) rotate(-0.5deg);\r\n            transform: translate(-1.5px, 1.5px) rotate(-0.5deg);\r\n  }\r\n  26% {\r\n    -webkit-transform: translate(1.5px, 0.5px) rotate(1.5deg);\r\n            transform: translate(1.5px, 0.5px) rotate(1.5deg);\r\n  }\r\n  28% {\r\n    -webkit-transform: translate(-0.5px, -0.5px) rotate(-0.5deg);\r\n            transform: translate(-0.5px, -0.5px) rotate(-0.5deg);\r\n  }\r\n  30% {\r\n    -webkit-transform: translate(1.5px, -0.5px) rotate(-0.5deg);\r\n            transform: translate(1.5px, -0.5px) rotate(-0.5deg);\r\n  }\r\n  32% {\r\n    -webkit-transform: translate(2.5px, -1.5px) rotate(1.5deg);\r\n            transform: translate(2.5px, -1.5px) rotate(1.5deg);\r\n  }\r\n  34% {\r\n    -webkit-transform: translate(2.5px, 2.5px) rotate(-0.5deg);\r\n            transform: translate(2.5px, 2.5px) rotate(-0.5deg);\r\n  }\r\n  36% {\r\n    -webkit-transform: translate(0.5px, -1.5px) rotate(0.5deg);\r\n            transform: translate(0.5px, -1.5px) rotate(0.5deg);\r\n  }\r\n  38% {\r\n    -webkit-transform: translate(2.5px, -0.5px) rotate(-0.5deg);\r\n            transform: translate(2.5px, -0.5px) rotate(-0.5deg);\r\n  }\r\n  40% {\r\n    -webkit-transform: translate(-0.5px, 2.5px) rotate(0.5deg);\r\n            transform: translate(-0.5px, 2.5px) rotate(0.5deg);\r\n  }\r\n  42% {\r\n    -webkit-transform: translate(-1.5px, 2.5px) rotate(0.5deg);\r\n            transform: translate(-1.5px, 2.5px) rotate(0.5deg);\r\n  }\r\n  44% {\r\n    -webkit-transform: translate(-1.5px, 1.5px) rotate(0.5deg);\r\n            transform: translate(-1.5px, 1.5px) rotate(0.5deg);\r\n  }\r\n  46% {\r\n    -webkit-transform: translate(1.5px, -0.5px) rotate(-0.5deg);\r\n            transform: translate(1.5px, -0.5px) rotate(-0.5deg);\r\n  }\r\n  48% {\r\n    -webkit-transform: translate(2.5px, -0.5px) rotate(0.5deg);\r\n            transform: translate(2.5px, -0.5px) rotate(0.5deg);\r\n  }\r\n  50% {\r\n    -webkit-transform: translate(-1.5px, 1.5px) rotate(0.5deg);\r\n            transform: translate(-1.5px, 1.5px) rotate(0.5deg);\r\n  }\r\n  52% {\r\n    -webkit-transform: translate(-0.5px, 1.5px) rotate(0.5deg);\r\n            transform: translate(-0.5px, 1.5px) rotate(0.5deg);\r\n  }\r\n  54% {\r\n    -webkit-transform: translate(-1.5px, 1.5px) rotate(0.5deg);\r\n            transform: translate(-1.5px, 1.5px) rotate(0.5deg);\r\n  }\r\n  56% {\r\n    -webkit-transform: translate(0.5px, 2.5px) rotate(1.5deg);\r\n            transform: translate(0.5px, 2.5px) rotate(1.5deg);\r\n  }\r\n  58% {\r\n    -webkit-transform: translate(2.5px, 2.5px) rotate(0.5deg);\r\n            transform: translate(2.5px, 2.5px) rotate(0.5deg);\r\n  }\r\n  60% {\r\n    -webkit-transform: translate(2.5px, -1.5px) rotate(1.5deg);\r\n            transform: translate(2.5px, -1.5px) rotate(1.5deg);\r\n  }\r\n  62% {\r\n    -webkit-transform: translate(-1.5px, 0.5px) rotate(1.5deg);\r\n            transform: translate(-1.5px, 0.5px) rotate(1.5deg);\r\n  }\r\n  64% {\r\n    -webkit-transform: translate(-1.5px, 1.5px) rotate(1.5deg);\r\n            transform: translate(-1.5px, 1.5px) rotate(1.5deg);\r\n  }\r\n  66% {\r\n    -webkit-transform: translate(0.5px, 2.5px) rotate(1.5deg);\r\n            transform: translate(0.5px, 2.5px) rotate(1.5deg);\r\n  }\r\n  68% {\r\n    -webkit-transform: translate(2.5px, -1.5px) rotate(1.5deg);\r\n            transform: translate(2.5px, -1.5px) rotate(1.5deg);\r\n  }\r\n  70% {\r\n    -webkit-transform: translate(2.5px, 2.5px) rotate(0.5deg);\r\n            transform: translate(2.5px, 2.5px) rotate(0.5deg);\r\n  }\r\n  72% {\r\n    -webkit-transform: translate(-0.5px, -1.5px) rotate(1.5deg);\r\n            transform: translate(-0.5px, -1.5px) rotate(1.5deg);\r\n  }\r\n  74% {\r\n    -webkit-transform: translate(-1.5px, 2.5px) rotate(1.5deg);\r\n            transform: translate(-1.5px, 2.5px) rotate(1.5deg);\r\n  }\r\n  76% {\r\n    -webkit-transform: translate(-1.5px, 2.5px) rotate(1.5deg);\r\n            transform: translate(-1.5px, 2.5px) rotate(1.5deg);\r\n  }\r\n  78% {\r\n    -webkit-transform: translate(-1.5px, 2.5px) rotate(0.5deg);\r\n            transform: translate(-1.5px, 2.5px) rotate(0.5deg);\r\n  }\r\n  80% {\r\n    -webkit-transform: translate(-1.5px, 0.5px) rotate(-0.5deg);\r\n            transform: translate(-1.5px, 0.5px) rotate(-0.5deg);\r\n  }\r\n  82% {\r\n    -webkit-transform: translate(-1.5px, 0.5px) rotate(-0.5deg);\r\n            transform: translate(-1.5px, 0.5px) rotate(-0.5deg);\r\n  }\r\n  84% {\r\n    -webkit-transform: translate(-0.5px, 0.5px) rotate(1.5deg);\r\n            transform: translate(-0.5px, 0.5px) rotate(1.5deg);\r\n  }\r\n  86% {\r\n    -webkit-transform: translate(2.5px, 1.5px) rotate(0.5deg);\r\n            transform: translate(2.5px, 1.5px) rotate(0.5deg);\r\n  }\r\n  88% {\r\n    -webkit-transform: translate(-1.5px, 0.5px) rotate(1.5deg);\r\n            transform: translate(-1.5px, 0.5px) rotate(1.5deg);\r\n  }\r\n  90% {\r\n    -webkit-transform: translate(-1.5px, -0.5px) rotate(-0.5deg);\r\n            transform: translate(-1.5px, -0.5px) rotate(-0.5deg);\r\n  }\r\n  92% {\r\n    -webkit-transform: translate(-1.5px, -1.5px) rotate(1.5deg);\r\n            transform: translate(-1.5px, -1.5px) rotate(1.5deg);\r\n  }\r\n  94% {\r\n    -webkit-transform: translate(0.5px, 0.5px) rotate(-0.5deg);\r\n            transform: translate(0.5px, 0.5px) rotate(-0.5deg);\r\n  }\r\n  96% {\r\n    -webkit-transform: translate(2.5px, -0.5px) rotate(-0.5deg);\r\n            transform: translate(2.5px, -0.5px) rotate(-0.5deg);\r\n  }\r\n  98% {\r\n    -webkit-transform: translate(-1.5px, -1.5px) rotate(-0.5deg);\r\n            transform: translate(-1.5px, -1.5px) rotate(-0.5deg);\r\n  }\r\n  0%, 100% {\r\n    -webkit-transform: translate(0, 0) rotate(0);\r\n            transform: translate(0, 0) rotate(0);\r\n  }\r\n\r\n}\r\n@keyframes shake {\r\n  2% {\r\n    -webkit-transform: translate(0.5px, -1.5px) rotate(-0.5deg);\r\n            transform: translate(0.5px, -1.5px) rotate(-0.5deg);\r\n  }\r\n\r\n  4% {\r\n    -webkit-transform: translate(0.5px, 1.5px) rotate(1.5deg);\r\n            transform: translate(0.5px, 1.5px) rotate(1.5deg);\r\n  }\r\n  6% {\r\n    -webkit-transform: translate(1.5px, 1.5px) rotate(1.5deg);\r\n            transform: translate(1.5px, 1.5px) rotate(1.5deg);\r\n  }\r\n  8% {\r\n    -webkit-transform: translate(2.5px, 1.5px) rotate(0.5deg);\r\n            transform: translate(2.5px, 1.5px) rotate(0.5deg);\r\n  }\r\n  10% {\r\n    -webkit-transform: translate(0.5px, 2.5px) rotate(0.5deg);\r\n            transform: translate(0.5px, 2.5px) rotate(0.5deg);\r\n  }\r\n  12% {\r\n    -webkit-transform: translate(1.5px, 1.5px) rotate(0.5deg);\r\n            transform: translate(1.5px, 1.5px) rotate(0.5deg);\r\n  }\r\n  14% {\r\n    -webkit-transform: translate(0.5px, 0.5px) rotate(0.5deg);\r\n            transform: translate(0.5px, 0.5px) rotate(0.5deg);\r\n  }\r\n  16% {\r\n    -webkit-transform: translate(-1.5px, -0.5px) rotate(1.5deg);\r\n            transform: translate(-1.5px, -0.5px) rotate(1.5deg);\r\n  }\r\n  18% {\r\n    -webkit-transform: translate(0.5px, 0.5px) rotate(1.5deg);\r\n            transform: translate(0.5px, 0.5px) rotate(1.5deg);\r\n  }\r\n  20% {\r\n    -webkit-transform: translate(2.5px, 2.5px) rotate(1.5deg);\r\n            transform: translate(2.5px, 2.5px) rotate(1.5deg);\r\n  }\r\n  22% {\r\n    -webkit-transform: translate(0.5px, -1.5px) rotate(1.5deg);\r\n            transform: translate(0.5px, -1.5px) rotate(1.5deg);\r\n  }\r\n  24% {\r\n    -webkit-transform: translate(-1.5px, 1.5px) rotate(-0.5deg);\r\n            transform: translate(-1.5px, 1.5px) rotate(-0.5deg);\r\n  }\r\n  26% {\r\n    -webkit-transform: translate(1.5px, 0.5px) rotate(1.5deg);\r\n            transform: translate(1.5px, 0.5px) rotate(1.5deg);\r\n  }\r\n  28% {\r\n    -webkit-transform: translate(-0.5px, -0.5px) rotate(-0.5deg);\r\n            transform: translate(-0.5px, -0.5px) rotate(-0.5deg);\r\n  }\r\n  30% {\r\n    -webkit-transform: translate(1.5px, -0.5px) rotate(-0.5deg);\r\n            transform: translate(1.5px, -0.5px) rotate(-0.5deg);\r\n  }\r\n  32% {\r\n    -webkit-transform: translate(2.5px, -1.5px) rotate(1.5deg);\r\n            transform: translate(2.5px, -1.5px) rotate(1.5deg);\r\n  }\r\n  34% {\r\n    -webkit-transform: translate(2.5px, 2.5px) rotate(-0.5deg);\r\n            transform: translate(2.5px, 2.5px) rotate(-0.5deg);\r\n  }\r\n  36% {\r\n    -webkit-transform: translate(0.5px, -1.5px) rotate(0.5deg);\r\n            transform: translate(0.5px, -1.5px) rotate(0.5deg);\r\n  }\r\n  38% {\r\n    -webkit-transform: translate(2.5px, -0.5px) rotate(-0.5deg);\r\n            transform: translate(2.5px, -0.5px) rotate(-0.5deg);\r\n  }\r\n  40% {\r\n    -webkit-transform: translate(-0.5px, 2.5px) rotate(0.5deg);\r\n            transform: translate(-0.5px, 2.5px) rotate(0.5deg);\r\n  }\r\n  42% {\r\n    -webkit-transform: translate(-1.5px, 2.5px) rotate(0.5deg);\r\n            transform: translate(-1.5px, 2.5px) rotate(0.5deg);\r\n  }\r\n  44% {\r\n    -webkit-transform: translate(-1.5px, 1.5px) rotate(0.5deg);\r\n            transform: translate(-1.5px, 1.5px) rotate(0.5deg);\r\n  }\r\n  46% {\r\n    -webkit-transform: translate(1.5px, -0.5px) rotate(-0.5deg);\r\n            transform: translate(1.5px, -0.5px) rotate(-0.5deg);\r\n  }\r\n  48% {\r\n    -webkit-transform: translate(2.5px, -0.5px) rotate(0.5deg);\r\n            transform: translate(2.5px, -0.5px) rotate(0.5deg);\r\n  }\r\n  50% {\r\n    -webkit-transform: translate(-1.5px, 1.5px) rotate(0.5deg);\r\n            transform: translate(-1.5px, 1.5px) rotate(0.5deg);\r\n  }\r\n  52% {\r\n    -webkit-transform: translate(-0.5px, 1.5px) rotate(0.5deg);\r\n            transform: translate(-0.5px, 1.5px) rotate(0.5deg);\r\n  }\r\n  54% {\r\n    -webkit-transform: translate(-1.5px, 1.5px) rotate(0.5deg);\r\n            transform: translate(-1.5px, 1.5px) rotate(0.5deg);\r\n  }\r\n  56% {\r\n    -webkit-transform: translate(0.5px, 2.5px) rotate(1.5deg);\r\n            transform: translate(0.5px, 2.5px) rotate(1.5deg);\r\n  }\r\n  58% {\r\n    -webkit-transform: translate(2.5px, 2.5px) rotate(0.5deg);\r\n            transform: translate(2.5px, 2.5px) rotate(0.5deg);\r\n  }\r\n  60% {\r\n    -webkit-transform: translate(2.5px, -1.5px) rotate(1.5deg);\r\n            transform: translate(2.5px, -1.5px) rotate(1.5deg);\r\n  }\r\n  62% {\r\n    -webkit-transform: translate(-1.5px, 0.5px) rotate(1.5deg);\r\n            transform: translate(-1.5px, 0.5px) rotate(1.5deg);\r\n  }\r\n  64% {\r\n    -webkit-transform: translate(-1.5px, 1.5px) rotate(1.5deg);\r\n            transform: translate(-1.5px, 1.5px) rotate(1.5deg);\r\n  }\r\n  66% {\r\n    -webkit-transform: translate(0.5px, 2.5px) rotate(1.5deg);\r\n            transform: translate(0.5px, 2.5px) rotate(1.5deg);\r\n  }\r\n  68% {\r\n    -webkit-transform: translate(2.5px, -1.5px) rotate(1.5deg);\r\n            transform: translate(2.5px, -1.5px) rotate(1.5deg);\r\n  }\r\n  70% {\r\n    -webkit-transform: translate(2.5px, 2.5px) rotate(0.5deg);\r\n            transform: translate(2.5px, 2.5px) rotate(0.5deg);\r\n  }\r\n  72% {\r\n    -webkit-transform: translate(-0.5px, -1.5px) rotate(1.5deg);\r\n            transform: translate(-0.5px, -1.5px) rotate(1.5deg);\r\n  }\r\n  74% {\r\n    -webkit-transform: translate(-1.5px, 2.5px) rotate(1.5deg);\r\n            transform: translate(-1.5px, 2.5px) rotate(1.5deg);\r\n  }\r\n  76% {\r\n    -webkit-transform: translate(-1.5px, 2.5px) rotate(1.5deg);\r\n            transform: translate(-1.5px, 2.5px) rotate(1.5deg);\r\n  }\r\n  78% {\r\n    -webkit-transform: translate(-1.5px, 2.5px) rotate(0.5deg);\r\n            transform: translate(-1.5px, 2.5px) rotate(0.5deg);\r\n  }\r\n  80% {\r\n    -webkit-transform: translate(-1.5px, 0.5px) rotate(-0.5deg);\r\n            transform: translate(-1.5px, 0.5px) rotate(-0.5deg);\r\n  }\r\n  82% {\r\n    -webkit-transform: translate(-1.5px, 0.5px) rotate(-0.5deg);\r\n            transform: translate(-1.5px, 0.5px) rotate(-0.5deg);\r\n  }\r\n  84% {\r\n    -webkit-transform: translate(-0.5px, 0.5px) rotate(1.5deg);\r\n            transform: translate(-0.5px, 0.5px) rotate(1.5deg);\r\n  }\r\n  86% {\r\n    -webkit-transform: translate(2.5px, 1.5px) rotate(0.5deg);\r\n            transform: translate(2.5px, 1.5px) rotate(0.5deg);\r\n  }\r\n  88% {\r\n    -webkit-transform: translate(-1.5px, 0.5px) rotate(1.5deg);\r\n            transform: translate(-1.5px, 0.5px) rotate(1.5deg);\r\n  }\r\n  90% {\r\n    -webkit-transform: translate(-1.5px, -0.5px) rotate(-0.5deg);\r\n            transform: translate(-1.5px, -0.5px) rotate(-0.5deg);\r\n  }\r\n  92% {\r\n    -webkit-transform: translate(-1.5px, -1.5px) rotate(1.5deg);\r\n            transform: translate(-1.5px, -1.5px) rotate(1.5deg);\r\n  }\r\n  94% {\r\n    -webkit-transform: translate(0.5px, 0.5px) rotate(-0.5deg);\r\n            transform: translate(0.5px, 0.5px) rotate(-0.5deg);\r\n  }\r\n  96% {\r\n    -webkit-transform: translate(2.5px, -0.5px) rotate(-0.5deg);\r\n            transform: translate(2.5px, -0.5px) rotate(-0.5deg);\r\n  }\r\n  98% {\r\n    -webkit-transform: translate(-1.5px, -1.5px) rotate(-0.5deg);\r\n            transform: translate(-1.5px, -1.5px) rotate(-0.5deg);\r\n  }\r\n  0%, 100% {\r\n    -webkit-transform: translate(0, 0) rotate(0);\r\n            transform: translate(0, 0) rotate(0);\r\n  }\r\n\r\n}\r\n\r\n/*.spanDelete{*/\r\n/*height: 30px;*/\r\n/*width: 100%;*/\r\n/*background-color: #f44437;*/\r\n/*color: #fff;*/\r\n/*font-size: larger;*/\r\n/*text-align: center;*/\r\n/*line-height: 60px;*/\r\n/*transition: 1s;*/\r\n/*}*/\r\n/*.spanDelete:hover{*/\r\n/*height: 60px;*/\r\n/*}*/\r\n\r\n.deleteMessage {\r\n  color: #f44437;\r\n  font-size: xx-large;\r\n  text-align: center;\r\n  line-height: 100%;\r\n  position: absolute;\r\n}\r\n\r\n.pokemonListImage{\r\n  height: auto;\r\n  width: auto;\r\n  max-width: 215px;\r\n  max-height: 215px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/list-pokemon/list-pokemon.component.html":
/***/ (function(module, exports) {

module.exports = "<app-pokemon-filter [pokemons]=\"pokemons\" (filtredPokemons)=\"updatePokemons($event)\">\n</app-pokemon-filter>\n<app-pokemon-add\n  (onDelete)=\"showDeletePokemons($event)\"\n  >\n</app-pokemon-add>\n<div [@deleteSpan]=\"spanToDeleteState\">\n  Ready to delete ...</div>\n<mat-grid-list *ngIf=\"pokemons != null\" cols=\"4\" rowHeight=\"1:1\">\n  <mat-grid-tile *ngFor=\"let pokemon of pokemons \">\n    <button *ngIf=\"readyToDelete\"\n            color=\"warn\"\n            mat-mini-fab\n            (click)=\"deletePokemon(pokemon.id)\"\n            class=\"deleteButton\">\n      <mat-icon>clear</mat-icon>\n    </button>\n    <div class=\"deleteMessage\">Deleted</div>\n    <a class=\"hrefCard\"\n       routerLink=\"/pokemon/{{pokemon.id}}\"\n      [@deleteState]=\"readyToDeleteState.split('/')[1] == pokemon.id  ? readyToDeleteState.split('/')[0] : (readyToDeleteState.split('/')[0] == 'deleted' ? 'active' :readyToDeleteState)\">\n      <mat-card  pkmn-shadow-card>\n      <mat-card-title>\n        {{pokemon.name}}\n      </mat-card-title>\n      <mat-card-content>\n        <mat-chip-list>\n          <mat-chip *ngFor=\"let type of pokemon.types\" color=\"{{ type | pokemonTypeColor }}\" selected=\"true\">{{type}}</mat-chip>\n        </mat-chip-list>\n        <span>{{ pokemon.created | date:\"dd/MM/yyyy\" }}</span>\n        <img class=\"pokemonListImage\" src=\"{{pokemon.picture}}\">\n      </mat-card-content>\n    </mat-card>\n    </a>\n  </mat-grid-tile>\n  <div *ngIf=\"pokemons.length == 0\" class=\"noPokemonToShow\">\n    Aucun pokemon à afficher\n  </div>\n</mat-grid-list>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/list-pokemon/list-pokemon.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPokemonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_pokemons_service__ = __webpack_require__("../../../../../src/app/services/pokemons.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListPokemonComponent = (function () {
    function ListPokemonComponent(router, pokemonsService) {
        this.router = router;
        this.pokemonsService = pokemonsService;
        this.readyToDelete = false;
        this.readyToDeleteState = 'inactive';
        this.spanToDeleteState = 'inactive';
        this.pokemons = null;
    }
    ListPokemonComponent.prototype.ngOnInit = function () {
        this.getPokemons();
    };
    ListPokemonComponent.prototype.getPokemons = function () {
        var _this = this;
        this.pokemonsService.getPokemons().then(function (pokemons) { return _this.pokemons = pokemons; });
    };
    ListPokemonComponent.prototype.selectPokemon = function (pokemon) {
        var link = ['/pokemon', pokemon.id];
        this.router.navigate(link);
    };
    ListPokemonComponent.prototype.updatePokemons = function (pokemons) {
        this.pokemons = pokemons;
    };
    ListPokemonComponent.prototype.showDeletePokemons = function (toggle) {
        this.readyToDelete = toggle;
        this.readyToDeleteState = this.readyToDeleteState === 'active' ? 'inactive' : (this.readyToDeleteState.split('/')[0] === 'deleted' ? 'inactive' : 'active');
        this.spanToDeleteState = this.spanToDeleteState === 'active' ? 'inactive' : 'active';
        console.log("reasdy ", this.readyToDeleteState);
    };
    ListPokemonComponent.prototype.deletePokemon = function (pokemonId) {
        this.pokemonsService.deletePokemon(pokemonId);
        this.readyToDeleteState = 'deleted'.concat('/').concat(pokemonId.toString());
        this.getPokemons();
    };
    ListPokemonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-list-pokemon',
            template: __webpack_require__("../../../../../src/app/components/list-pokemon/list-pokemon.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/list-pokemon/list-pokemon.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["k" /* trigger */])('deleteState', [
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* state */])('inactive', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* style */])({
                        transform: 'scale(0.9)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* state */])('deleted', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* style */])({
                        transition: '200ms',
                        opacity: 0,
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* state */])('active', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* style */])({
                        // animation: 'shake 1.82s cubic-bezier(0, 1.15, 0, 1.12)  both',
                        // transform: 'translate3d(0, 0, 0)',
                        // backfaceVisibility: 'hidden',
                        // perspective: '1000px',
                        // animationIterationCount: 'infinite',
                        animationName: 'shake',
                        animationDuration: '2s',
                        animationTimingFunction: 'ease-in-out',
                        animationIterationCount: 'infinite',
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["j" /* transition */])('inactive => active', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('100ms ease-in')),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["j" /* transition */])('active => inactive', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('100ms ease-out')),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["j" /* transition */])('active => deleted', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('100ms ease-out'))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["k" /* trigger */])('deleteSpan', [
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* state */])('inactive', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* style */])({
                        height: '0px',
                        opacity: '0',
                        width: '100%',
                        backgroundColor: '#f44437',
                        color: '#fff',
                        fontSize: 'larger',
                        textAlign: 'center',
                        lineHeight: '60px',
                        transition: '1s'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* state */])('active', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* style */])({
                        height: '60px',
                        width: '100%',
                        backgroundColor: '#f44437',
                        color: '#fff',
                        fontSize: 'larger',
                        textAlign: 'center',
                        lineHeight: '60px',
                        transition: '1s'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["j" /* transition */])('inactive => active', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('1s')),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["j" /* transition */])('active => inactive', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('1s'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_pokemons_service__["a" /* PokemonsService */]])
    ], ListPokemonComponent);
    return ListPokemonComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".centerMe{\r\n  text-align: center;\r\n}\r\n.forms{\r\n  display: -ms-grid;\r\n  display: grid;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"card-action\">-->\n<!--<a (click)=\"login()\"  *ngIf=\"!authService.isLoggedIn\">Se connecter</a>-->\n<!--<a (click)=\"logout()\" *ngIf=\"authService.isLoggedIn\">Se déconnecter</a>-->\n<!--</div>-->\n<button mat-raised-button color=\"warn\" (click)=\"login({'email':'admin@sifast.com','password':'admin100'})\">Login Admin</button>\n<mat-grid-list cols=\"2\">\n  <mat-grid-tile >\n    <form class=\"forms\" [formGroup]=\"formAdd\" novalidate (ngSubmit)=\"addUser(formAdd.value, formAdd.valid)\">\n      <h1>Add user</h1>\n      <div formGroupName=\"name\">\n        <mat-form-field>\n          <input matInput required formControlName=\"first\" placeholder=\"First\">\n          <mat-error *ngIf=\"formAdd.controls.name.controls.first.hasError('required')\">\n            {{validationMessages.name.first.required}}\n          </mat-error>\n          <mat-error *ngIf=\"formAdd.controls.name.controls.first.hasError('minlength')\">\n            {{validationMessages.name.first.minlength}}\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput required formControlName=\"last\" placeholder=\"Last\">\n          <mat-error *ngIf=\"formAdd.controls.name.controls.last.hasError('required')\">\n            {{validationMessages.name.last.required}}\n          </mat-error>\n          <mat-error *ngIf=\"formAdd.controls.name.controls.last.hasError('minlength')\">\n            {{validationMessages.name.last.minlength}}\n          </mat-error>\n        </mat-form-field>\n      </div>\n\n      <mat-form-field>\n        <input matInput required formControlName=\"email\" placeholder=\"Email\">\n        <mat-error *ngIf=\"formAdd.controls.email.hasError('required')\">{{validationMessages.email.required}}</mat-error>\n        <mat-error *ngIf=\"formAdd.controls.email.hasError('pattern')\">{{validationMessages.email.pattern}}</mat-error>\n\n      </mat-form-field>\n\n      <div formGroupName=\"verification\">\n        <mat-form-field>\n          <input type=\"password\" matInput required formControlName=\"password\" placeholder=\"Password\">\n          <mat-error *ngIf=\"formAdd.controls.verification.controls.password.hasError('required')\">\n            {{validationMessages.verification.password.required}}\n          </mat-error>\n          <mat-error *ngIf=\"formAdd.controls.verification.controls.password.hasError('minlength')\">\n            {{validationMessages.verification.password.minlength}}\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field>\n          <input type=\"password\" matInput required formControlName=\"passwordConfirm\" placeholder=\"Password Confirmation\">\n          <mat-error *ngIf=\"formAdd.controls.verification.controls.passwordConfirm.hasError('required')\">\n            {{validationMessages.verification.passwordConfirm.required}}\n          </mat-error>\n          <mat-error *ngIf=\"formAdd.controls.verification.controls.passwordConfirm.hasError('minlength')\">\n            {{validationMessages.verification.passwordConfirm.minlength}}\n          </mat-error>\n          <mat-error *ngIf=\"formAdd.controls.verification.getError('validateEqual', ['passwordConfirm'])\">\n            {{validationMessages.verification.passwordConfirm.validateEqual}}\n          </mat-error>\n        </mat-form-field>\n      </div>\n      <button [disabled]=\"formAdd.invalid\" mat-raised-button color=\"accent\">Add user</button>\n    </form>\n  </mat-grid-tile>\n  <mat-grid-tile >\n    <form class=\"forms\" [formGroup]=\"formLogin\" novalidate (ngSubmit)=\"login(formLogin.value, formLogin.valid)\">\n      <h1>Login</h1>\n      <mat-form-field>\n        <input matInput required formControlName=\"email\" placeholder=\"Email\">\n        <mat-error *ngIf=\"formLogin.controls.email.hasError('required')\">{{validationMessages.email.required}}\n        </mat-error>\n        <mat-error *ngIf=\"formLogin.controls.email.hasError('pattern')\">{{validationMessages.email.pattern}}</mat-error>\n      </mat-form-field>\n\n      <mat-form-field>\n        <input type=\"password\" matInput required formControlName=\"password\" placeholder=\"Password\">\n        <mat-error *ngIf=\"formLogin.controls.password.hasError('required')\">\n          {{validationMessages.verification.password.required}}\n        </mat-error>\n        <mat-error *ngIf=\"formLogin.controls.password.hasError('minlength')\">\n          {{validationMessages.verification.password.minlength}}\n        </mat-error>\n      </mat-form-field>\n\n      <button [disabled]=\"formLogin.invalid\" mat-raised-button color=\"warn\">Login</button>\n\n    </form>\n  </mat-grid-tile>\n</mat-grid-list>\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__confirmation_password_validator__ = __webpack_require__("../../../../../src/app/confirmation-password.validator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginComponent = (function () {
    function LoginComponent(authService, router, fb, usersService, snackBar) {
        this.authService = authService;
        this.router = router;
        this.fb = fb;
        this.usersService = usersService;
        this.snackBar = snackBar;
        this.validationMessages = {
            'name': {
                'first': {
                    'required': 'First name is required.',
                    'minlength': 'Minimum 3 characters'
                },
                'last': {
                    'required': 'Last name is required.',
                    'minlength': 'Minimum 3 characters'
                }
            },
            'email': {
                'required': 'E-mail is required.',
                'pattern': 'E-mail Invalid'
            },
            'verification': {
                'password': {
                    'required': 'password is required.',
                    'minlength': 'Minimum 8 characters'
                },
                'passwordConfirm': {
                    'required': 'Confirme password is required.',
                    'minlength': 'Minimum 8 characters',
                    'validateEqual': 'password not the same'
                }
            }
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.formAdd = this.fb.group({
            name: this.fb.group({
                first: [
                    '',
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].compose([
                        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required,
                        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].minLength(3)
                    ])
                ],
                last: [
                    '',
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].compose([
                        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required,
                        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].minLength(3)
                    ])
                ]
            }),
            email: [
                '',
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].pattern('^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$')
                ])
            ],
            verification: this.fb.group({
                password: [
                    '',
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].compose([
                        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required,
                        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].minLength(8)
                    ])
                ],
                passwordConfirm: [
                    '',
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].compose([
                        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required,
                        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].minLength(8),
                        Object(__WEBPACK_IMPORTED_MODULE_5__confirmation_password_validator__["a" /* confPasswordValidator */])()
                    ])
                ]
            })
        });
        this.formLogin = this.fb.group({
            email: [
                '',
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].pattern('^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$')
                ])
            ],
            password: [
                '',
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].minLength(8)
                ])
            ]
        });
        this.user = {
            name: {
                first: '',
                last: ''
            },
            email: '',
            verification: {
                password: '',
                passwordConfirm: ''
            }
        };
        this.formAdd.setValue(this.user);
    };
    LoginComponent.prototype.addUser = function (model, isValid) {
        model.id = (new Date().valueOf()) * 10000;
        this.usersService.addUser(model);
    };
    LoginComponent.prototype.login = function (model, isValid) {
        var _this = this;
        this.authService.login(model).then(function () {
            if (_this.authService.isLoggedIn) {
                var redirect = _this.authService.redirectUrl ? _this.authService.redirectUrl : '/pokemon/all';
                _this.router.navigate([redirect]);
            }
            else {
                _this.openSnackBar('User not found', 'Undo');
            }
        });
    };
    LoginComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 5000,
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_6__services_users_service__["a" /* UsersService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["p" /* MatSnackBar */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/page-not-found/page-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <img src=\"http://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png\"/>\n  <h1>Hey, cette page n'existe pas !</h1>\n  <a routerLink=\"/pokemon/all\" class=\"waves-effect waves-teal btn-flat\">\n    Retourner à l' accueil\n  </a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-not-found',
            template: __webpack_require__("../../../../../src/app/components/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/pokemon-add/dialog-content-example-dialog.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".br {\r\n  display: block;\r\n  height: 20px;\r\n}\r\n.chipsUnclicked{\r\n  color: #fff;\r\n  font-size: 14px;\r\n  line-height: 8px;\r\n  transition: box-shadow 280ms cubic-bezier(.4,0,.2,1);\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n  padding: 7px 12px;\r\n  border-radius: 24px;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  cursor: pointer;\r\n}\r\n.chipsUnclicked:hover{\r\n  box-shadow: 0 3px 3px -2px rgba(0,0,0,.2), 0 3px 4px 0 rgba(0,0,0,.14), 0 1px 8px 0 rgba(0,0,0,.12);\r\n  outline: 0;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pokemon-add/dialog-content-example-dialog.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit()\" #pokemonForm=\"ngForm\">\r\n  <h2 mat-dialog-title>Add Pokemon</h2>\r\n  <mat-dialog-content>\r\n    <app-dnd\r\n      [imgOriginalSrc]=\"pokemon.picture\"\r\n      (imgOriginalOut)=\"updatePicture($event, pokemon.id)\"\r\n    ></app-dnd>\r\n    <div class=\"br\"></div>\r\n    <mat-form-field>\r\n      <input matInput required [(ngModel)]=\"pokemon.name\" name=\"name\" placeholder=\"Name\"\r\n             [formControl]=\"nameFormControl\">\r\n      <mat-error *ngIf=\"nameFormControl.invalid\">{{getErrorName()}}</mat-error>\r\n    </mat-form-field>\r\n\r\n\r\n    <mat-form-field>\r\n      <input matInput [(ngModel)]=\"pokemon.hp\" type=\"number\" name=\"hp\" placeholder=\"Hp\" [formControl]=\"hpFormControl\">\r\n      <mat-error *ngIf=\"hpFormControl.invalid\">{{getErrorHp()}}</mat-error>\r\n    </mat-form-field>\r\n    <div class=\"br\"></div>\r\n\r\n    <mat-form-field>\r\n      <input matInput [(ngModel)]=\"pokemon.cp\" type=\"number\" name=\"cp\" placeholder=\"Cp\" [formControl]=\"cpFormControl\">\r\n      <mat-error *ngIf=\"cpFormControl.invalid\">{{getErrorCp()}}</mat-error>\r\n    </mat-form-field>\r\n\r\n      <section class=\"example-section\" *ngFor=\"let type of types\">\r\n        <mat-checkbox [checked]=\"hasType(type)\"\r\n                      [disabled]=\"!isTypesValid(type)\"\r\n                      (change)=\"selectType($event, type)\">\r\n          <div class=\"chipsUnclicked {{ type | pokemonTypeColor }}\"> {{type}}</div>\r\n        </mat-checkbox>\r\n      </section>\r\n    <div class=\"br\"></div>\r\n  </mat-dialog-content>\r\n  <mat-dialog-actions>\r\n    <button [disabled]=\"nameFormControl.invalid || hpFormControl.invalid || cpFormControl.invalid || hasNoTypes()\"\r\n            mat-raised-button color=\"warn\" type=\"submit\">Valider\r\n    </button>\r\n    <button mat-button mat-dialog-close tabindex=\"-1\">Cancel</button>\r\n  </mat-dialog-actions>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/pokemon-add/pokemon-add.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".operationsContainer{\r\n  text-align: -webkit-center;\r\n  padding-top: 20px;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pokemon-add/pokemon-add.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"operationsContainer\">\n  <button  mat-button (click)=\"openDialog()\">Add</button>\n  <button  mat-button  color=\"warn\"  (click)=\"showDeleted()\">Delete</button>\n  <button  mat-button  color=\"accent\"   routerLink=\"/fileStore\">File Store</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/pokemon-add/pokemon-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PokemonAddComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogContentExampleDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_pokemons_service__ = __webpack_require__("../../../../../src/app/services/pokemons.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_cache_storage_service__ = __webpack_require__("../../../../../src/app/services/cache-storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PokemonAddComponent = (function () {
    function PokemonAddComponent(dialog) {
        this.dialog = dialog;
        this.deletedToggle = false;
        this.onDelete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    PokemonAddComponent.prototype.ngOnInit = function () {
    };
    PokemonAddComponent.prototype.showDeleted = function () {
        this.deletedToggle = !this.deletedToggle;
        this.onDelete.emit(this.deletedToggle);
    };
    PokemonAddComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(DialogContentExampleDialog, {
            height: 'auto',
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: " + result);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], PokemonAddComponent.prototype, "onDelete", void 0);
    PokemonAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-pokemon-add',
            template: __webpack_require__("../../../../../src/app/components/pokemon-add/pokemon-add.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/pokemon-add/pokemon-add.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialog */]])
    ], PokemonAddComponent);
    return PokemonAddComponent;
}());

var DialogContentExampleDialog = (function () {
    function DialogContentExampleDialog(pokemonsService, cacheStorageService, dialogRef, router) {
        this.pokemonsService = pokemonsService;
        this.cacheStorageService = cacheStorageService;
        this.dialogRef = dialogRef;
        this.router = router;
        // @Input() pokemon: Pokemon; // propriété d'entrée du composant
        this.pokemon = null; // pokémon à afficher dans le template
        this.nameFormControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].minLength(4)
        ]);
        this.hpFormControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required
        ]);
        this.cpFormControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required
        ]);
    }
    DialogContentExampleDialog.prototype.ngOnInit = function () {
        this.types = this.pokemonsService.getPokemonTypes();
        this.pokemon = {
            "id": (new Date().valueOf()) * 10000,
            "name": "",
            "hp": 0,
            "cp": 0,
            "picture": "./assets/images/sample.png",
            "types": [],
            "created": new Date()
        };
    };
    // Détermine si le type passé en paramètres appartient ou non au pokémon en cours d'édition.
    DialogContentExampleDialog.prototype.hasType = function (type) {
        var index = this.pokemon.types.indexOf(type);
        if (~index)
            return true;
        return false;
    };
    // valide le nombre de 1-3 types par pokémon
    DialogContentExampleDialog.prototype.isTypesValid = function (type) {
        if (this.pokemon.types.length >= 3 && !this.hasType(type)) {
            return false;
        }
        return true;
    };
    DialogContentExampleDialog.prototype.hasNoTypes = function () {
        if (this.pokemon.types.length <= 0) {
            return true;
        }
        return false;
    };
    // Méthode appelée lorsque l'utilisateur ajoute ou retire un type au pokémon en cours d'édition.
    DialogContentExampleDialog.prototype.selectType = function ($event, type) {
        var checked = $event.checked;
        if (checked) {
            this.pokemon.types.push(type);
        }
        else {
            var index = this.pokemon.types.indexOf(type);
            if (~index) {
                this.pokemon.types.splice(index, 1);
            }
        }
    };
    // La méthode appelée lorsque le formulaire est soumis.
    DialogContentExampleDialog.prototype.onSubmit = function () {
        console.log("picture", this.pokemon);
        this.pokemonsService.addPokemons(this.pokemon);
        this.closeDialog();
        var link = ['/pokemon', this.pokemon.id];
        this.router.navigate(link);
    };
    DialogContentExampleDialog.prototype.updatePicture = function (imgOriginalOut, pokemonId) {
        this.pokemon.picture = imgOriginalOut;
    };
    DialogContentExampleDialog.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    DialogContentExampleDialog.prototype.getErrorName = function () {
        return this.nameFormControl.errors.required ? 'You must enter a value' :
            this.nameFormControl.errors.minlength ? 'Not a valid Name' :
                '';
    };
    DialogContentExampleDialog.prototype.getErrorHp = function () {
        return this.hpFormControl.errors.required ? 'You must enter a value' : '';
    };
    DialogContentExampleDialog.prototype.getErrorCp = function () {
        return this.cpFormControl.errors.required ? 'You must enter a value' : '';
    };
    DialogContentExampleDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'dialog-content-example-dialog',
            template: __webpack_require__("../../../../../src/app/components/pokemon-add/dialog-content-example-dialog.html"),
            styles: [__webpack_require__("../../../../../src/app/components/pokemon-add/dialog-content-example-dialog.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_pokemons_service__["a" /* PokemonsService */],
            __WEBPACK_IMPORTED_MODULE_5__services_cache_storage_service__["a" /* CacheStorageService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogRef */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], DialogContentExampleDialog);
    return DialogContentExampleDialog;
}());



/***/ }),

/***/ "../../../../../src/app/components/pokemon-filter/pokemon-filter.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".buttonsFilterContainer{\r\n  text-align: -webkit-center;\r\n  padding-top: 20px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pokemon-filter/pokemon-filter.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"buttonsFilterContainer\">\n  <button  mat-fab  (click)=\"getAllType(type)\">All</button>\n  <button *ngFor=\"let type of types\" mat-fab  color=\"{{ type | pokemonTypeColor }}\" (click)=\"searchPokemonByType(type)\">{{type}}</button>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/pokemon-filter/pokemon-filter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PokemonFilterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_pokemons_service__ = __webpack_require__("../../../../../src/app/services/pokemons.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rxjs_extension_ts__ = __webpack_require__("../../../../../src/app/rxjs-extension.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PokemonFilterComponent = (function () {
    function PokemonFilterComponent(pokemonsService) {
        this.pokemonsService = pokemonsService;
        this.filtredPokemons = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    PokemonFilterComponent.prototype.ngOnInit = function () {
        this.types = this.pokemonsService.getPokemonTypes();
    };
    PokemonFilterComponent.prototype.searchPokemonByType = function (searchValue) {
        var _this = this;
        this.pokemonsService.searchType(searchValue)
            .then(function (pokemons) {
            _this.filtredPok = pokemons;
            _this.filtredPokemons.emit(_this.filtredPok);
        });
    };
    PokemonFilterComponent.prototype.getAllType = function () {
        var _this = this;
        this.pokemonsService.getPokemons()
            .then(function (pokemons) {
            _this.filtredPok = pokemons;
            _this.filtredPokemons.emit(_this.filtredPok);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], PokemonFilterComponent.prototype, "pokemons", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], PokemonFilterComponent.prototype, "filtredPokemons", void 0);
    PokemonFilterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-pokemon-filter',
            template: __webpack_require__("../../../../../src/app/components/pokemon-filter/pokemon-filter.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/pokemon-filter/pokemon-filter.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_pokemons_service__["a" /* PokemonsService */]])
    ], PokemonFilterComponent);
    return PokemonFilterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/pokemon-form/pokemon-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".br {\r\n  display: block;\r\n  height: 20px;\r\n}\r\n.chipsUnclicked{\r\n  color: #fff;\r\n  font-size: 14px;\r\n  line-height: 8px;\r\n  transition: box-shadow 280ms cubic-bezier(.4,0,.2,1);\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n  padding: 7px 12px;\r\n  border-radius: 24px;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  cursor: pointer;\r\n}\r\n.chipsUnclicked:hover{\r\n  box-shadow: 0 3px 3px -2px rgba(0,0,0,.2), 0 3px 4px 0 rgba(0,0,0,.14), 0 1px 8px 0 rgba(0,0,0,.12);\r\n  outline: 0;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pokemon-form/pokemon-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"pokemon\" >\n  <mat-grid-list cols=\"2\">\n    <mat-grid-tile>\n      <app-dnd\n        [imgOriginalSrc]=\"pokemon.picture\"\n        (imgOriginalOut)=\"updatePicture($event, pokemon.id)\"\n      ></app-dnd>\n    </mat-grid-tile>\n    <mat-grid-tile>\n      <form (ngSubmit)=\"onSubmit()\" #pokemonForm=\"ngForm\">\n\n        <mat-form-field>\n          <input matInput required [(ngModel)]=\"pokemon.name\" name=\"name\" placeholder=\"Name\" [formControl]=\"nameFormControl\">\n          <mat-error *ngIf=\"nameFormControl.invalid\">{{getErrorName()}}</mat-error>\n        </mat-form-field>\n\n\n        <mat-form-field>\n          <input matInput [(ngModel)]=\"pokemon.hp\" name=\"hp\" placeholder=\"Hp\" [formControl]=\"hpFormControl\">\n          <mat-error *ngIf=\"hpFormControl.invalid\">{{getErrorHp()}}</mat-error>\n        </mat-form-field>\n        <div class=\"br\"></div>\n\n        <mat-form-field>\n          <input matInput [(ngModel)]=\"pokemon.cp\" name=\"cp\" placeholder=\"Cp\" [formControl]=\"cpFormControl\">\n          <mat-error *ngIf=\"cpFormControl.invalid\">{{getErrorCp()}}</mat-error>\n        </mat-form-field>\n\n        <section class=\"example-section\" *ngFor=\"let type of types\">\n          <mat-checkbox [checked]=\"hasType(type)\"\n                        [disabled]=\"!isTypesValid(type)\"\n                        (change)=\"selectType($event, type)\">\n            <div class=\"chipsUnclicked {{ type | pokemonTypeColor }}\"> {{type}} </div>\n          </mat-checkbox>\n        </section>\n        <div class=\"br\"></div>\n        <button [disabled]=\"nameFormControl.invalid || hpFormControl.invalid || cpFormControl.invalid || hasNoTypes()\" mat-raised-button color=\"warn\" type=\"submit\">Valider</button>\n      </form>\n\n    </mat-grid-tile>\n  </mat-grid-list>\n</div>\n<mat-progress-bar color=\"warn\" *ngIf=\"!pokemon\" mode=\"query\"></mat-progress-bar>\n"

/***/ }),

/***/ "../../../../../src/app/components/pokemon-form/pokemon-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PokemonFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_pokemons_service__ = __webpack_require__("../../../../../src/app/services/pokemons.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_cache_storage_service__ = __webpack_require__("../../../../../src/app/services/cache-storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PokemonFormComponent = (function () {
    function PokemonFormComponent(pokemonsService, cacheStorageService, route, // just for testing !
        router) {
        this.pokemonsService = pokemonsService;
        this.cacheStorageService = cacheStorageService;
        this.route = route;
        this.router = router;
        // @Input() pokemon: Pokemon; // propriété d'entrée du composant
        this.pokemon = null; // pokémon à afficher dans le template
        this.nameFormControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].minLength(4)
        ]);
        this.hpFormControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required
        ]);
        this.cpFormControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required
        ]);
    }
    PokemonFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Initialisation de la propriété types
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.pokemonsService.getPokemon(id).then(function (pokemon) { return _this.pokemon = pokemon; });
        });
        this.types = this.pokemonsService.getPokemonTypes();
    };
    // Détermine si le type passé en paramètres appartient ou non au pokémon en cours d'édition.
    PokemonFormComponent.prototype.hasType = function (type) {
        var index = this.pokemon.types.indexOf(type);
        if (~index)
            return true;
        return false;
    };
    // valide le nombre de 1-3 types par pokémon
    PokemonFormComponent.prototype.isTypesValid = function (type) {
        if (this.pokemon.types.length >= 3 && !this.hasType(type)) {
            return false;
        }
        return true;
    };
    PokemonFormComponent.prototype.hasNoTypes = function () {
        if (this.pokemon.types.length <= 0) {
            return true;
        }
        return false;
    };
    // Méthode appelée lorsque l'utilisateur ajoute ou retire un type au pokémon en cours d'édition.
    PokemonFormComponent.prototype.selectType = function ($event, type) {
        var checked = $event.checked;
        if (checked) {
            this.pokemon.types.push(type);
        }
        else {
            var index = this.pokemon.types.indexOf(type);
            if (~index) {
                this.pokemon.types.splice(index, 1);
            }
        }
    };
    // La méthode appelée lorsque le formulaire est soumis.
    PokemonFormComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log("this pokemon", JSON.stringify(this.pokemon));
        this.pokemonsService.update(this.pokemon)
            .then(function () {
            var link = ['/pokemon', _this.pokemon.id];
            _this.router.navigate(link);
        });
    };
    PokemonFormComponent.prototype.updatePicture = function (imgOriginalOut, pokemonId) {
        var imageFromIxDB = this.pokemon.picture;
        this.cacheStorageService.saveImage(imgOriginalOut, this.pokemon.id);
        imageFromIxDB = this.cacheStorageService.getImage(this.pokemon.picture, this.pokemon.id);
        this.pokemon.picture = imageFromIxDB;
    };
    PokemonFormComponent.prototype.goBack = function () {
        this.router.navigate(['/pokemons']);
    };
    PokemonFormComponent.prototype.getErrorName = function () {
        return this.nameFormControl.errors.required ? 'You must enter a value' :
            this.nameFormControl.errors.minlength ? 'Not a valid Name' :
                '';
    };
    PokemonFormComponent.prototype.getErrorHp = function () {
        return this.hpFormControl.errors.required ? 'You must enter a value' : '';
    };
    PokemonFormComponent.prototype.getErrorCp = function () {
        return this.cpFormControl.errors.required ? 'You must enter a value' : '';
    };
    PokemonFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-pokemon-form',
            template: __webpack_require__("../../../../../src/app/components/pokemon-form/pokemon-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/pokemon-form/pokemon-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_pokemons_service__["a" /* PokemonsService */],
            __WEBPACK_IMPORTED_MODULE_4__services_cache_storage_service__["a" /* CacheStorageService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], PokemonFormComponent);
    return PokemonFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/pokemon-search/pokemon-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".hrefAutoC:link {\r\n  text-decoration: none;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n.autoComplete{\r\n  width: 40px;\r\n  height: 40px;\r\n}\r\n.prefix{\r\n  opacity:0.5;\r\n  font-size: medium;\r\n}\r\n.inputValueAuto{\r\n  width: 320px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pokemon-search/pokemon-search.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n  <span  class=\"prefix\" matPrefix>Search &nbsp; </span>\n  <input class=\"inputValueAuto\" #serchPokemons matInput type=\"search\" [formControl]=\"myControl\" (keyup)=\"searchPokemonByName(serchPokemons.value)\" [matAutocomplete]=\"auto\">\n</mat-form-field>\n\n<mat-autocomplete #auto=\"matAutocomplete\">\n  <mat-option *ngFor=\"let pokemon of pokemons\" [value]=\"pokemon.name\">\n    <a class=\"hrefAutoC\" routerLink=\"/pokemon/{{pokemon.id}}\">\n      <img class=\"autoComplete\" src=\"{{pokemon.picture}}\">\n      {{ pokemon.name }}\n    </a>\n  </mat-option>\n</mat-autocomplete>\n"

/***/ }),

/***/ "../../../../../src/app/components/pokemon-search/pokemon-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PokemonSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_pokemons_service__ = __webpack_require__("../../../../../src/app/services/pokemons.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rxjs_extension_ts__ = __webpack_require__("../../../../../src/app/rxjs-extension.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PokemonSearchComponent = (function () {
    function PokemonSearchComponent(pokemonsService) {
        this.pokemonsService = pokemonsService;
        this.pokemons = null;
        this.myControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]();
    }
    PokemonSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pokemonsService.getPokemons().then(function (pokemons) { return _this.pokemons = pokemons; });
    };
    PokemonSearchComponent.prototype.searchPokemonByName = function (searchValue) {
        var _this = this;
        this.pokemonsService.searchName(searchValue)
            .then(function (pokemons) { return _this.pokemons = pokemons; });
    };
    PokemonSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-pokemon-search',
            template: __webpack_require__("../../../../../src/app/components/pokemon-search/pokemon-search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/pokemon-search/pokemon-search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_pokemons_service__["a" /* PokemonsService */]])
    ], PokemonSearchComponent);
    return PokemonSearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/confirmation-password.validator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = confPasswordValidator;
function confPasswordValidator() {
    return function (control) {
        var confPassword = control.value;
        var originalPassword = control.root.value.verification;
        if (originalPassword) {
            if (originalPassword.password && confPassword !== originalPassword.password) {
                return { validateEqual: true };
            }
            return null;
        }
        else {
            return null;
        }
    };
}


/***/ }),

/***/ "../../../../../src/app/directives/dnd.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DndDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DndDirective = (function () {
    function DndDirective() {
        this.allowed_extensions = [];
        this.imgDropSrc = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.filesChangeEmiter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.filesInvalidEmiter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.background = '#eee';
    }
    DndDirective.prototype.onDragOver = function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#999';
    };
    DndDirective.prototype.onDragLeave = function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#eee';
    };
    DndDirective.prototype.onDrop = function (evt) {
        var _this = this;
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#eee';
        var file = evt.dataTransfer.files[0];
        var reader = new FileReader();
        reader.onload = function (event) {
            _this.imgSrc = reader.result;
            _this.imgDropSrc.emit(_this.imgSrc);
        };
        reader.readAsDataURL(file);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], DndDirective.prototype, "allowed_extensions", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], DndDirective.prototype, "imgDropSrc", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], DndDirective.prototype, "filesChangeEmiter", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], DndDirective.prototype, "filesInvalidEmiter", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */])('style.background'),
        __metadata("design:type", Object)
    ], DndDirective.prototype, "background", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('dragover', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DndDirective.prototype, "onDragOver", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('dragleave', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DndDirective.prototype, "onDragLeave", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('drop', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DndDirective.prototype, "onDrop", null);
    DndDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[appDnd]'
        }),
        __metadata("design:paramtypes", [])
    ], DndDirective);
    return DndDirective;
}());



/***/ }),

/***/ "../../../../../src/app/directives/shadow-card.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShadowCardDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShadowCardDirective = (function () {
    function ShadowCardDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.setBorder('#f5f5f5');
    }
    ShadowCardDirective.prototype.onMouseEnter = function () {
        this.setBorder('#009688');
    };
    ShadowCardDirective.prototype.onMouseLeave = function () {
        this.setBorder('#f5f5f5');
    };
    ShadowCardDirective.prototype.setBorder = function (color) {
        var style = 'solid 4px ' + color;
        this.renderer.setElementStyle(this.el.nativeElement, 'border', style);
    };
    ShadowCardDirective.prototype.setHeight = function (height) {
        this.renderer.setElementStyle(this.el.nativeElement, 'height', height);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ShadowCardDirective.prototype, "onMouseEnter", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ShadowCardDirective.prototype, "onMouseLeave", null);
    ShadowCardDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({ selector: '[pkmn-shadow-card]' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Renderer */]])
    ], ShadowCardDirective);
    return ShadowCardDirective;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/pokemon-type-color-pipe.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PokemonTypeColorPipePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/*
 * Affiche la couleur correspondant au type du pokémon.
 * Prend en argument le type du pokémon.
 * Exemple d'utilisation:
 *   {{ pokemon.type | pokemonTypeColor }}
 */
var PokemonTypeColorPipePipe = (function () {
    function PokemonTypeColorPipePipe() {
    }
    PokemonTypeColorPipePipe.prototype.transform = function (type) {
        var color;
        switch (type) {
            case 'Feu':
                color = 'warn';
                break;
            case 'Eau':
                color = 'primary';
                break;
            case 'Plante':
                color = 'accent';
                break;
            case 'Insecte':
                color = 'warn';
                break;
            case 'Normal':
                color = 'primary';
                break;
            case 'Vol':
                color = 'warn';
                break;
            case 'Poison':
                color = 'accent';
                break;
            case 'Fée':
                color = 'primary';
                break;
            case 'Psy':
                color = 'accent';
                break;
            case 'Electrik':
                color = 'warn';
                break;
            case 'Combat':
                color = 'accent';
                break;
            default:
                color = 'primary';
                break;
        }
        return color;
    };
    PokemonTypeColorPipePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({ name: 'pokemonTypeColor' })
    ], PokemonTypeColorPipePipe);
    return PokemonTypeColorPipePipe;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/safe.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipe = (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({ name: 'safe' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], SafePipe);
    return SafePipe;
}());



/***/ }),

/***/ "../../../../../src/app/rxjs-extension.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_toPromise__);
/**
 * Created by mohamed.gontara on 13/10/2017.
 */
// Les extensions de la classe Observable


// Les opérateurs d'Observable











/***/ }),

/***/ "../../../../../src/app/services/a-b-s-dispatcher.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ABSDispatcherService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pouchdb__ = __webpack_require__("../../../../pouchdb/lib/index-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pouchdb___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_pouchdb__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_pouchdb_find__ = __webpack_require__("../../../../pouchdb-find/lib/index-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_pouchdb_find___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_pouchdb_find__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_util__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






__WEBPACK_IMPORTED_MODULE_3_pouchdb__["plugin"](__WEBPACK_IMPORTED_MODULE_4_pouchdb_find__);
var ABSDispatcherService = (function () {
    function ABSDispatcherService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' }); // set headers
    }
    ABSDispatcherService.prototype.init = function (dataBaseName, remoteUrl) {
        //create database to this object
        this.dbName = dataBaseName;
        this.url = remoteUrl;
        this.db = new __WEBPACK_IMPORTED_MODULE_3_pouchdb__(dataBaseName, { auto_compaction: true });
        //get infos about this object db to check
        this.db.info().then(function (info) {
            console.info(dataBaseName, "- info", info);
        });
    };
    ABSDispatcherService.prototype.add = function (newObject) {
        this.postToDataBase(newObject); //add to data base
        if (navigator.onLine) {
            this.httpPost(newObject); //post to Remote server
        }
        else {
            this.archiveOfflineRequest("add", newObject, 0, this.url, new Date().valueOf());
        }
    };
    ABSDispatcherService.prototype.getAll = function () {
        if (navigator.onLine) {
            return this.httpGetAll();
        }
        else {
            return this.getDocs();
        }
    };
    ABSDispatcherService.prototype.getById = function (id) {
        if (navigator.onLine) {
            return this.httpGetById(id);
        }
        else {
            return this.getByIdFromDataBase(id).then(function (response) { return response.docs[0]; });
        }
    };
    ABSDispatcherService.prototype.put = function (newObject) {
        if (navigator.onLine) {
            this.putToDataBase(newObject); //add to data base
            return this.httpPut(newObject); //put to Remote server
        }
        else {
            this.archiveOfflineRequest("put", newObject, newObject.id, this.url, new Date().valueOf());
            return this.putToDataBase(newObject); //add to data base
        }
    };
    ABSDispatcherService.prototype.delete = function (id) {
        if (navigator.onLine) {
            this.deleteFromDataBase(id); //add to data base
            return this.httpDelete(id); //put to Remote server
        }
        else {
            this.archiveOfflineRequest("delete", {}, id, this.url, new Date().valueOf());
            return this.deleteFromDataBase(id); //add to data base
        }
    };
    // POST
    ABSDispatcherService.prototype.postToDataBase = function (newObject) {
        this.db.post(newObject, function (err, response) {
            if (err) {
                return console.log(err);
            }
        });
    };
    ABSDispatcherService.prototype.httpPost = function (newObject) {
        return this.http
            .post(this.url, JSON.stringify(newObject), this.headers)
            .toPromise()
            .then(function (response) { return console.log(response); })
            .catch(this.handleError);
    };
    // GET ALL
    ABSDispatcherService.prototype.getAllFromDataBase = function () {
        // this.db.info().then(function (info) {
        //   console.info("0- info", info);
        // });
        return this.db.allDocs({
            include_docs: true
        }, function (err, results) {
            if (err) {
                console.error(err);
            }
        });
    };
    ABSDispatcherService.prototype.getDocs = function () {
        return this.getAllFromDataBase().then(function (datas) {
            var docs = [];
            datas.rows.forEach(function (data) {
                docs.unshift(data.doc);
            });
            return docs;
        });
    };
    ABSDispatcherService.prototype.httpGetAll = function () {
        var _this = this;
        console.log("call http method");
        return this.http.get(this.url)
            .toPromise()
            .then(function (objects) {
            _this.db.allDocs().then(function (result) {
                // Promise isn't supported by all browsers; you may want to use bluebird
                return Promise.all(result.rows.map(function (row) {
                    return _this.db.remove(row.id, row.value.rev, { force: true });
                }));
            }).then(function () {
                Promise.all(objects.json().map(function (object) {
                    return _this.db.post(object, { force: true });
                }));
            }).catch(function (err) {
                console.info("err :", err);
            });
            return objects.json();
        }).catch(this.handleError);
    };
    // GET BY ID
    ABSDispatcherService.prototype.getByIdFromDataBase = function (id) {
        return this.db.find({
            selector: { id: id }
        }, function (err, result) {
            if (err) {
                return console.log(err);
            }
        });
    };
    ABSDispatcherService.prototype.httpGetById = function (id) {
        var url = this.url + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    //PUT
    ABSDispatcherService.prototype.putToDataBase = function (newObject) {
        var _this = this;
        return this.getByIdFromDataBase(newObject.id)
            .then(function (response) {
            if (response.docs[0]) {
                var oldEl = response.docs[0];
                newObject._id = oldEl._id;
                newObject._rev = oldEl._rev;
                _this.db.put(newObject, { allow_conflict: true }, function (err, response) {
                    if (err) {
                        return console.log(err);
                    }
                    else {
                        console.log("Documents Updated Successfully");
                    }
                });
            }
        }).then(function (response) { return "Updated"; });
    };
    ABSDispatcherService.prototype.httpPut = function (newObject) {
        var url = this.url + "/" + newObject.id;
        return this.http
            .put(url, JSON.stringify(newObject), this.headers)
            .toPromise()
            .then(function (response) { return response; })
            .catch(this.handleError);
    };
    //DELETE
    ABSDispatcherService.prototype.deleteFromDataBase = function (id) {
        var _this = this;
        return this.getByIdFromDataBase(id)
            .then(function (response) {
            if (response.docs[0]) {
                var oldEl = response.docs[0];
                oldEl._deleted = true;
                _this.db.post([oldEl], {});
            }
        }).then(function (response) { return "Deleted"; });
    };
    ABSDispatcherService.prototype.httpDelete = function (id) {
        var url = this.url + "/" + id;
        return this.http
            .delete(url, this.headers)
            .toPromise()
            .then(function (response) { return response; })
            .catch(this.handleError);
    };
    // function to archive offline request
    ABSDispatcherService.prototype.archiveOfflineRequest = function (operation, object, id, url, sec) {
        var id_op = Object(__WEBPACK_IMPORTED_MODULE_5_util__["isUndefined"])(id) ? 0 : id;
        var archives = new __WEBPACK_IMPORTED_MODULE_3_pouchdb__("achives-offline");
        var archiveDoc = { operation: operation, object: object, id_op: id_op, url: url, sec: sec };
        archives.post(archiveDoc, function (err, response) {
            if (err) {
                return console.log(err);
            }
        });
    };
    ABSDispatcherService.prototype.handleError = function (error) {
        console.error('Erreur : ', error); // on affiche simplement le message de l'erreur dans la console...
        return Promise.reject(error.message || error);
    };
    ABSDispatcherService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]])
    ], ABSDispatcherService);
    return ABSDispatcherService;
}());



/***/ }),

/***/ "../../../../../src/app/services/a-b-s-file-store.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ABSFileStoreService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pouchdb__ = __webpack_require__("../../../../pouchdb/lib/index-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pouchdb___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pouchdb__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pouchdb_find__ = __webpack_require__("../../../../pouchdb-find/lib/index-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pouchdb_find___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_pouchdb_find__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




__WEBPACK_IMPORTED_MODULE_2_pouchdb__["plugin"](__WEBPACK_IMPORTED_MODULE_3_pouchdb_find__);
var ABSFileStoreService = (function () {
    function ABSFileStoreService() {
        this.db = new __WEBPACK_IMPORTED_MODULE_2_pouchdb__('files-store', { auto_compaction: true });
        this.db.put({
            _id: 'store',
            _attachments: {}
        }).then(function (response) {
            console.log("Init store", response);
        }).catch(function (err) {
            console.log(err);
        });
    }
    ABSFileStoreService.prototype.saveFileAsAtt = function (blob, attId) {
        var _this = this;
        return this.db.get('store', { attachments: true }).then(function (doc) {
            doc._attachments[attId] = {
                content_type: blob.type,
                data: blob
            };
            _this.db.put(doc).catch(function (err) {
                console.log(err);
            });
        }).catch(function (err) {
            console.log(err);
        });
    };
    ABSFileStoreService.prototype.getAllFiles = function () {
        return this.db.get('store', { attachments: true, binary: true }).then(function (doc) {
            console.log(doc);
            return doc._attachments;
        });
    };
    ABSFileStoreService.prototype.getFileAsAtt = function (attchId) {
        this.db.getAttachment('store', attchId).then(function (blobOrBuffer) {
            console.log(blobOrBuffer);
        }).catch(function (err) {
            console.log(err);
        });
    };
    ABSFileStoreService.prototype.deleteFileAsAtt = function (attchId) {
        this.db.removeAttachment('store', attchId).then(function (result) {
            console.log(result);
        }).catch(function (err) {
            console.log(err);
        });
    };
    ABSFileStoreService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ABSFileStoreService);
    return ABSFileStoreService;
}());



/***/ }),

/***/ "../../../../../src/app/services/a-b-s-synchroniser.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ABSSynchroniserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pouchdb__ = __webpack_require__("../../../../pouchdb/lib/index-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pouchdb___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pouchdb__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ABSSynchroniserService = (function () {
    function ABSSynchroniserService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' }); // set headers
    }
    ABSSynchroniserService.prototype.sync = function () {
        var _this = this;
        this.getArchives().then(function (docs) {
            var all_contents = [];
            docs.rows.forEach(function (archive) {
                all_contents.push(archive.doc);
            });
            all_contents.sort(function (a, b) {
                return a.sec - b.sec;
            });
            _this.operationDispatcher(all_contents, _this.http, _this.headers, _this.handleError);
        });
    };
    ABSSynchroniserService.prototype.getArchives = function () {
        this.archives = new __WEBPACK_IMPORTED_MODULE_2_pouchdb__("achives-offline");
        return this.archives.allDocs({
            include_docs: true
        }, function (err, results) {
            if (err) {
                console.error(err);
            }
        });
    };
    ABSSynchroniserService.prototype.operationDispatcher = function (all_contents, http, headers, handleError) {
        if (all_contents.length > 0) {
            all_contents.forEach(function (archive) {
                console.log(archive);
                switch (archive.operation) {
                    case ("add"):
                        http.post(archive.url, JSON.stringify(archive.object), headers)
                            .toPromise()
                            .then(function (response) { return console.log('Syncronise :', response); })
                            .catch(handleError);
                        break;
                    case ("put"):
                        http.put(archive.url + "/" + archive.id_op, JSON.stringify(archive.object), headers)
                            .toPromise()
                            .then(function (response) { return console.log('Syncronise :', response); })
                            .catch(handleError);
                        break;
                    case ("delete"):
                        http.delete(archive.url + "/" + archive.id_op, headers)
                            .toPromise()
                            .then(function (response) { return console.log('Syncronise :', response); })
                            .catch(handleError);
                        break;
                    case ("upload"):
                        console.log("upload element !");
                        break;
                    default:
                        console.log("nothing to do !");
                }
            });
            this.archives.destroy();
        }
        else {
            console.log("nothing to synchronize !");
        }
    };
    ABSSynchroniserService.prototype.handleError = function (error) {
        console.error('Erreur : ', error); // on affiche simplement le message de l'erreur dans la console...
        return Promise.reject(error.message || error);
    };
    ABSSynchroniserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]])
    ], ABSSynchroniserService);
    return ABSSynchroniserService;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var url = state.url;
        console.log("Can activate URL:", url);
        return this.checkLogin(url);
    };
    AuthGuard.prototype.checkLogin = function (url) {
        if (this.authService.isLoggedIn) {
            return true;
        }
        this.authService.redirectUrl = url;
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rxjs_extension_ts__ = __webpack_require__("../../../../../src/app/rxjs-extension.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService(usersService) {
        this.usersService = usersService;
        this.isLoggedIn = false; // L'utilisateur est-il connecté ?
        this.checkAuth = false;
    }
    // Une méthode de connexion
    AuthService.prototype.login = function (loginData) {
        var _this = this;
        return this.checkUser(loginData).then(function (bol) {
            _this.isLoggedIn = bol;
        });
    };
    // Une méthode de déconnexion
    AuthService.prototype.logout = function () {
        this.isLoggedIn = false;
    };
    AuthService.prototype.checkUser = function (loginData) {
        var _this = this;
        return this.usersService.getUsers()
            .then(function (users) { return _this.users = users; })
            .then(function () {
            if (_this.users) {
                for (var i = 0; i < _this.users.length; i++) {
                    if (_this.users[i].email == loginData.email && _this.users[i].verification.password == loginData.password) {
                        _this.checkAuth = true;
                    }
                }
            }
        }).then(function () {
            return _this.checkAuth;
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__users_service__["a" /* UsersService */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/cache-storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CacheStorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CacheStorageService = (function () {
    function CacheStorageService() {
    }
    CacheStorageService.prototype.saveImage = function (imgOriginalOut, id) {
        var open = indexedDB.open("MyImageStore", 1);
        // Create the schema
        open.onupgradeneeded = function () {
            var db = open.result;
            var store = db.createObjectStore("MyImageCatalog", { autoIncrement: true });
            var index = store.createIndex("Images", "id");
        };
        open.onsuccess = function () {
            // Start a new transaction
            var db = open.result;
            var tx = db.transaction("MyImageCatalog", "readwrite");
            var store = tx.objectStore("MyImageCatalog");
            var index = store.index("Images");
            // delete old data by id !
            store.delete(id);
            // Add some data
            store.put({ id: id, imageString: imgOriginalOut });
            // Close the db when the transaction is done
            tx.oncomplete = function () {
                db.close();
            };
        };
    };
    CacheStorageService.prototype.getImage = function (imgOriginal, id) {
        var imageFromIxDB = imgOriginal;
        var open = indexedDB.open("MyImageStore", 1);
        // Create the schema
        open.onupgradeneeded = function () {
            var db = open.result;
            var store = db.createObjectStore("MyImageCatalog", { autoIncrement: true });
            var index = store.createIndex("Images", "id");
        };
        open.onsuccess = function () {
            // Start a new transaction
            var db = open.result;
            var tx = db.transaction("MyImageCatalog", "readwrite");
            var store = tx.objectStore("MyImageCatalog");
            var index = store.index("Images");
            var getImage = store.get(1);
            getImage.onsuccess = function () {
                if (getImage.result) {
                    console.log(" getImageResult ", getImage.result.imageString);
                    imageFromIxDB = getImage.result.imageString;
                }
            };
            // Close the db when the transaction is done
            tx.oncomplete = function () {
                db.close();
            };
        };
        return imageFromIxDB;
    };
    CacheStorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], CacheStorageService);
    return CacheStorageService;
}());



/***/ }),

/***/ "../../../../../src/app/services/in-memory-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InMemoryDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__classes_mock_pokemons__ = __webpack_require__("../../../../../src/app/classes/mock-pokemons.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_mock_users__ = __webpack_require__("../../../../../src/app/classes/mock-users.ts");


var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var pokemons = __WEBPACK_IMPORTED_MODULE_0__classes_mock_pokemons__["a" /* POKEMONS */];
        var users = __WEBPACK_IMPORTED_MODULE_1__classes_mock_users__["a" /* USERS */];
        return {
            'pokemons': pokemons,
            'users': users
        };
    };
    return InMemoryDataService;
}());



/***/ }),

/***/ "../../../../../src/app/services/network-check-status.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkCheckStatusService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NetworkCheckStatusService = (function () {
    function NetworkCheckStatusService() {
        this.isOnline = true;
    }
    NetworkCheckStatusService.prototype.ngOnInit = function () {
    };
    NetworkCheckStatusService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], NetworkCheckStatusService);
    return NetworkCheckStatusService;
}());



/***/ }),

/***/ "../../../../../src/app/services/pokemons.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PokemonsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__a_b_s_dispatcher_service__ = __webpack_require__("../../../../../src/app/services/a-b-s-dispatcher.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PokemonsService = (function () {
    function PokemonsService(aBSDispatcherService) {
        this.aBSDispatcherService = aBSDispatcherService;
        this.aBSDispatcherService.init("pokemon", "app/pokemons");
    }
    PokemonsService.prototype.getPokemons = function () {
        return this.aBSDispatcherService.getAll();
    };
    // Retourne le pokémon avec l'identifiant passé en paramètre
    PokemonsService.prototype.getPokemon = function (id) {
        return this.aBSDispatcherService.getById(id).then(function (el) { return el; });
    };
    PokemonsService.prototype.addPokemons = function (pokemon) {
        return this.aBSDispatcherService.add(pokemon);
    };
    PokemonsService.prototype.update = function (pokemon) {
        var _this = this;
        return this.aBSDispatcherService.put(pokemon).then(function (reponse) { return _this.aBSDispatcherService.getById(pokemon.id); });
    };
    PokemonsService.prototype.deletePokemon = function (pokemonId) {
        return this.aBSDispatcherService.delete(pokemonId).then(function (el) { return console.log("Delete", el); });
    };
    // types de pokémons possible
    PokemonsService.prototype.getPokemonTypes = function () {
        return [
            'Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik',
            'Poison', 'Fée', 'Vol', 'Combat', 'Psy'
        ];
    };
    PokemonsService.prototype.searchName = function (term) {
        return this.aBSDispatcherService.getAll().then(function (data) {
            console.table(data);
            var pokemons = data.map(function (pokemon) {
                if (pokemon.name.toUpperCase().indexOf(term.toUpperCase()) > -1) {
                    return pokemon;
                }
            });
            return pokemons;
        });
    };
    PokemonsService.prototype.searchType = function (term) {
        return this.aBSDispatcherService.getAll().then(function (data) {
            var pokemons = [];
            data.map(function (pokemon) {
                if (pokemon.types.indexOf(term) > -1) {
                    pokemons.push(pokemon);
                }
            });
            return pokemons;
        });
    };
    PokemonsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__a_b_s_dispatcher_service__["a" /* ABSDispatcherService */]])
    ], PokemonsService);
    return PokemonsService;
}());



/***/ }),

/***/ "../../../../../src/app/services/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersService = (function () {
    function UsersService(http) {
        this.http = http;
    }
    UsersService.prototype.getUsers = function () {
        return this.http.get('app/users')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UsersService.prototype.addUser = function (user) {
        var url = "app/users";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' }); // set headers
        return this.http
            .post(url, JSON.stringify(user), headers)
            .toPromise()
            .then(function (response) { return console.log("add response", response); })
            .catch(this.handleError);
    };
    UsersService.prototype.handleError = function (error) {
        console.error('Erreur : ', error); // on affiche simplement le message de l'erreur dans la console...
        return Promise.reject(error.message || error);
    };
    UsersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map