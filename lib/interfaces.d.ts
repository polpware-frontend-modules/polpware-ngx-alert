export declare type AlertType = 'info' | 'warning' | 'success' | 'danger';
export interface IAlertItem {
    type: AlertType;
    message: string;
    timeout: number;
}
export interface IAlertProvider {
    data: Array<IAlertItem>;
    clean(): void;
    info(m: string, timeout?: number): void;
    success(m: string, timeout?: number): void;
    warning(m: string, timeout?: number): void;
    danger(m: string, timeout?: number): void;
}
export interface IHasAlertFeature {
    alertProvider: IAlertProvider;
}
//# sourceMappingURL=interfaces.d.ts.map