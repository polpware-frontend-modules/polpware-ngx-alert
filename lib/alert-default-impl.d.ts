import { IAlertProvider, IAlertItem } from './interfaces';
export declare class AlertDefaultImpl implements IAlertProvider {
    private _items;
    get data(): IAlertItem[];
    clean(): void;
    info(m: string, timeout?: number): void;
    success(m: string, timeout?: number): void;
    warning(m: string, timeout?: number): void;
    danger(m: string, timeout?: number): void;
}
//# sourceMappingURL=alert-default-impl.d.ts.map