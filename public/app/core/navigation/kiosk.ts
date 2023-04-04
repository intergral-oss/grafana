import { UrlQueryMap } from '@grafana/data';

import { KioskMode } from '../../types';
import config from '../config';
import {locationService} from "../../../../packages/grafana-runtime";

// TODO Remove after topnav feature toggle is permanent and old NavBar is removed
export function getKioskMode(queryParams: UrlQueryMap): KioskMode | null {
  const kiosk = locationService.getSearchObject().kiosk;
  if (config.KioskMode === 'off') {
    switch (kiosk) {
      case 'tv':
        return KioskMode.TV;
      //  legacy support
      case '1':
      case 'full':
      case true:
        return KioskMode.Full;
      case 'embed':
        return KioskMode.Embed;
      default:
        return null;
    }
  } else {
    switch (config.kioskMode) {
      //  legacy support
      case 'full':
        return KioskMode.Full;
      case 'embed':
        return KioskMode.Embed;
      default:
        return null;
    }
  }
}
