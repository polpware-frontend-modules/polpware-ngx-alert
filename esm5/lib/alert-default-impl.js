var AlertDefaultImpl = /** @class */ (function () {
    function AlertDefaultImpl() {
        this._items = [];
    }
    Object.defineProperty(AlertDefaultImpl.prototype, "data", {
        get: function () {
            return this._items;
        },
        enumerable: true,
        configurable: true
    });
    AlertDefaultImpl.prototype.clean = function () {
        this._items = [];
    };
    AlertDefaultImpl.prototype.info = function (m, timeout) {
        this._items.push({
            type: 'info',
            message: m,
            timeout: timeout || 0
        });
    };
    AlertDefaultImpl.prototype.success = function (m, timeout) {
        this._items.push({
            type: 'success',
            message: m,
            timeout: timeout || 0
        });
    };
    AlertDefaultImpl.prototype.warning = function (m, timeout) {
        this._items.push({
            type: 'warning',
            message: m,
            timeout: timeout || 0
        });
    };
    AlertDefaultImpl.prototype.danger = function (m, timeout) {
        this._items.push({
            type: 'danger',
            message: m,
            timeout: timeout || 0
        });
    };
    return AlertDefaultImpl;
}());
export { AlertDefaultImpl };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtZGVmYXVsdC1pbXBsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL25neC1hbGVydC8iLCJzb3VyY2VzIjpbImxpYi9hbGVydC1kZWZhdWx0LWltcGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7SUFBQTtRQUNZLFdBQU0sR0FBc0IsRUFBRSxDQUFDO0lBeUMzQyxDQUFDO0lBdkNHLHNCQUFJLGtDQUFJO2FBQVI7WUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7SUFFRCxnQ0FBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELCtCQUFJLEdBQUosVUFBSyxDQUFTLEVBQUUsT0FBZ0I7UUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDYixJQUFJLEVBQUUsTUFBTTtZQUNaLE9BQU8sRUFBRSxDQUFDO1lBQ1YsT0FBTyxFQUFFLE9BQU8sSUFBSSxDQUFDO1NBQ3hCLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxrQ0FBTyxHQUFQLFVBQVEsQ0FBUyxFQUFFLE9BQWdCO1FBQy9CLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2IsSUFBSSxFQUFFLFNBQVM7WUFDZixPQUFPLEVBQUUsQ0FBQztZQUNWLE9BQU8sRUFBRSxPQUFPLElBQUksQ0FBQztTQUN4QixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsa0NBQU8sR0FBUCxVQUFRLENBQVMsRUFBRSxPQUFnQjtRQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNiLElBQUksRUFBRSxTQUFTO1lBQ2YsT0FBTyxFQUFFLENBQUM7WUFDVixPQUFPLEVBQUUsT0FBTyxJQUFJLENBQUM7U0FDeEIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGlDQUFNLEdBQU4sVUFBTyxDQUFTLEVBQUUsT0FBZ0I7UUFDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDYixJQUFJLEVBQUUsUUFBUTtZQUNkLE9BQU8sRUFBRSxDQUFDO1lBQ1YsT0FBTyxFQUFFLE9BQU8sSUFBSSxDQUFDO1NBQ3hCLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTCx1QkFBQztBQUFELENBQUMsQUExQ0QsSUEwQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJQWxlcnRQcm92aWRlciwgSUFsZXJ0SXRlbSB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XG5cbmV4cG9ydCBjbGFzcyBBbGVydERlZmF1bHRJbXBsIGltcGxlbWVudHMgSUFsZXJ0UHJvdmlkZXIge1xuICAgIHByaXZhdGUgX2l0ZW1zOiBBcnJheTxJQWxlcnRJdGVtPiA9IFtdO1xuXG4gICAgZ2V0IGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtcztcbiAgICB9XG5cbiAgICBjbGVhbigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5faXRlbXMgPSBbXTtcbiAgICB9XG5cbiAgICBpbmZvKG06IHN0cmluZywgdGltZW91dD86IG51bWJlcikge1xuICAgICAgICB0aGlzLl9pdGVtcy5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdpbmZvJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6IG0sXG4gICAgICAgICAgICB0aW1lb3V0OiB0aW1lb3V0IHx8IDBcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3VjY2VzcyhtOiBzdHJpbmcsIHRpbWVvdXQ/OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5faXRlbXMucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgICAgICAgICBtZXNzYWdlOiBtLFxuICAgICAgICAgICAgdGltZW91dDogdGltZW91dCB8fCAwXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHdhcm5pbmcobTogc3RyaW5nLCB0aW1lb3V0PzogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2l0ZW1zLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ3dhcm5pbmcnLFxuICAgICAgICAgICAgbWVzc2FnZTogbSxcbiAgICAgICAgICAgIHRpbWVvdXQ6IHRpbWVvdXQgfHwgMFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkYW5nZXIobTogc3RyaW5nLCB0aW1lb3V0PzogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2l0ZW1zLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2RhbmdlcicsXG4gICAgICAgICAgICBtZXNzYWdlOiBtLFxuICAgICAgICAgICAgdGltZW91dDogdGltZW91dCB8fCAwXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==