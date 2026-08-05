type AlertType = 'info' | 'warning' | 'success' | 'danger';
interface IAlertItem {
    type: AlertType;
    message: string;
    timeout: number;
}
interface IAlertProvider {
    data: Array<IAlertItem>;
    clean(): void;
    info(m: string, timeout?: number): void;
    success(m: string, timeout?: number): void;
    warning(m: string, timeout?: number): void;
    danger(m: string, timeout?: number): void;
}
interface IHasAlertFeature {
    alertProvider: IAlertProvider;
}

declare class AlertDefaultImpl implements IAlertProvider {
    private _items;
    get data(): IAlertItem[];
    clean(): void;
    info(m: string, timeout?: number): void;
    success(m: string, timeout?: number): void;
    warning(m: string, timeout?: number): void;
    danger(m: string, timeout?: number): void;
}

export { AlertDefaultImpl };
export type { AlertType, IAlertItem, IAlertProvider, IHasAlertFeature };
//# sourceMappingURL=polpware-ngx-alert.d.ts.map
