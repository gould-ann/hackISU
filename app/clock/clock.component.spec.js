"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var testing_1 = require('@angular/core/testing');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/Rx');
var clock_component_1 = require('./clock.component');
var clock_service_1 = require('./shared/clock.service');
describe('a clock component', function () {
    var component;
    // register all needed dependencies
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [http_1.HttpModule],
            providers: [
                { provide: clock_service_1.ClockService, useClass: MockClockService },
                clock_component_1.ClockComponent
            ]
        });
    });
    // instantiation through framework injection
    beforeEach(testing_1.inject([clock_component_1.ClockComponent], function (ClockComponent) {
        component = ClockComponent;
    }));
    it('should have an instance', function () {
        expect(component).toBeDefined();
    });
});
// Mock of the original clock service
var MockClockService = (function (_super) {
    __extends(MockClockService, _super);
    function MockClockService() {
        _super.apply(this, arguments);
    }
    MockClockService.prototype.getList = function () {
        return Observable_1.Observable.from([{ id: 1, name: 'One' }, { id: 2, name: 'Two' }]);
    };
    return MockClockService;
}(clock_service_1.ClockService));
//# sourceMappingURL=clock.component.spec.js.map