// import {t} from '@lingui/macro';
//
// import {AppEvents} from '@grafana/data';
import { locationService } from '@grafana/runtime';

import { KioskMode } from '../../types';
// import appEvents from '../app_events';

export function toggleKioskMode() {
  let kiosk = locationService.getSearchObject().kiosk;

  switch (kiosk) {
    case 'tv':
    //   kiosk = 'tv';
    //   // appEvents.emit(AppEvents.alertSuccess, [
    //   //   t({ id: 'navigation.kiosk.tv-alert', message: 'Press ESC to exit Kiosk mode' }),
    //   // ]);
    //   break;
    // case '1':
    // case true:
    //   kiosk = 'tv';
    //   break;
    default:
      kiosk = 'tv';
  }

  locationService.partial({ kiosk });
}

export function getKioskMode(): KioskMode {
  const kiosk = locationService.getSearchObject().kiosk;

  switch (kiosk) {
    case 'tv':
      return KioskMode.TV;
    //  legacy support
    case '1':
    case 'full':
    case true:
      return KioskMode.TV;
    case 'embed':
      return KioskMode.TV;
    default:
      return KioskMode.TV;
  }
}

export function exitKioskMode() {
  locationService.partial({ kiosk: null });
}
