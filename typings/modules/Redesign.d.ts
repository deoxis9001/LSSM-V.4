import Vue from 'vue';
import { VehicleWindow } from '../../src/modules/redesign/parsers/vehicle';
import { CreditsDailyWindow } from '../../src/modules/redesign/parsers/credits/daily';
import { CreditsOverviewWindow } from '../../src/modules/redesign/parsers/credits/overview';
import { CoinsListWindow } from '../../src/modules/redesign/parsers/coins/list';
import { DefaultComputed } from 'vue/types/options';
import VueI18n from 'vue-i18n';
import { CombinedVueInstance } from 'vue/types/vue';

type types = 'vehicle' | 'credits/daily' | 'credits/overview' | 'coins/list';
type windows =
    | VehicleWindow
    | CreditsDailyWindow
    | CreditsOverviewWindow
    | CoinsListWindow;
export type routeChecks = Record<string, types>;

interface Data<T, D> {
    type: T;
    data: D;
    html: string;
    urlProp: string;
}

export interface RedesignLightbox<
    Type extends types | '' = types | '',
    Window extends windows | null = windows | null
> {
    Data: Data<Type, Window>;
    Methods: {
        getIdFromEl(el: HTMLAnchorElement | null): number;
        getSetting(): <T>(setting: string, defaultValue: T) => Promise<T>;
        setSetting(): <T>(settingId: string, value: T) => Promise<void>;
    };
    Computed: DefaultComputed;
    Props: {
        url: string;
        $m(
            key: string,
            args?: {
                [key: string]: unknown;
            }
        ): VueI18n.TranslateResult;
        $mc(
            key: string,
            amount: number,
            args?: {
                [key: string]: unknown;
            }
        ): VueI18n.TranslateResult;
        routeChecks: routeChecks;
        noModal: boolean;
    };
}

export type RedesignLightboxVue<
    Type extends types,
    Window extends windows
> = CombinedVueInstance<
    Vue,
    RedesignLightbox<Type, Window>['Data'],
    RedesignLightbox<Type, Window>['Methods'],
    RedesignLightbox<Type, Window>['Computed'],
    RedesignLightbox<Type, Window>['Props']
>;
