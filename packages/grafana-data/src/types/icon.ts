export const availableIconsIndex = {
  google: true,
  microsoft: true,
  github: true,
  gitlab: true,
  okta: true,
  discord: true,
  hipchat: true,
  'google-hangouts-alt': true,
  pagerduty: true,
  line: true,
  anchor: true,
  'adjust-circle': true,
  'angle-double-down': true,
  'angle-double-right': true,
  'angle-double-up': true,
  'angle-down': true,
  'angle-left': true,
  'angle-right': true,
  'angle-up': true,
  apps: true,
  arrow: true,
  'arrow-down': true,
  'arrow-from-right': true,
  'arrow-left': true,
  'arrow-random': true,
  'arrow-right': true,
  'arrow-to-right': true,
  'arrow-up': true,
  'arrows-h': true,
  'arrows-v': true,
  'expand-arrows': true,
  at: true,
  backward: true,
  bars: true,
  bell: true,
  'bell-slash': true,
  bolt: true,
  book: true,
  bookmark: true,
  'book-open': true,
  'brackets-curly': true,
  bug: true,
  building: true,
  'calculator-alt': true,
  'calendar-alt': true,
  'calendar-slash': true,
  camera: true,
  capture: true,
  'channel-add': true,
  'chart-line': true,
  check: true,
  'check-circle': true,
  'check-square': true,
  circle: true,
  'circle-mono': true,
  'clipboard-alt': true,
  'clock-nine': true,
  cloud: true,
  'cloud-download': true,
  'cloud-upload': true,
  'code-branch': true,
  cog: true,
  columns: true,
  'comment-alt': true,
  'comment-alt-message': true,
  'comment-alt-share': true,
  'comments-alt': true,
  compass: true,
  copy: true,
  'corner-down-right-alt': true,
  'create-dashboard': true,
  'credit-card': true,
  crosshair: true,
  cube: true,
  dashboard: true,
  database: true,
  'dice-three': true,
  'document-info': true,
  'download-alt': true,
  draggabledots: true,
  edit: true,
  'ellipsis-v': true,
  envelope: true,
  'exchange-alt': true,
  'exclamation-triangle': true,
  'exclamation-circle': true,
  'external-link-alt': true,
  eye: true,
  'eye-slash': true,
  'ellipsis-h': true,
  'fa fa-spinner': true,
  favorite: true,
  'file-alt': true,
  'file-blank': true,
  'file-copy-alt': true,
  'file-download': true,
  'file-landscape-alt': true,
  filter: true,
  flip: true,
  folder: true,
  font: true,
  fire: true,
  'folder-open': true,
  'folder-plus': true,
  'folder-upload': true,
  forward: true,
  'gf-bar-alignment-after': true,
  'gf-bar-alignment-before': true,
  'gf-bar-alignment-center': true,
  'gf-glue': true,
  'gf-grid': true,
  'gf-interpolation-linear': true,
  'gf-interpolation-smooth': true,
  'gf-interpolation-step-after': true,
  'gf-interpolation-step-before': true,
  'gf-landscape': true,
  'gf-layout-simple': true,
  'gf-logs': true,
  'gf-movepane-left': true,
  'gf-movepane-right': true,
  'gf-portrait': true,
  'gf-service-account': true,
  'gf-show-context': true,
  grafana: true,
  'graph-bar': true,
  'grafana-ml': true,
  heart: true,
  'heart-rate': true,
  'heart-break': true,
  history: true,
  'history-alt': true,
  home: true,
  'home-alt': true,
  'horizontal-align-center': true,
  'horizontal-align-left': true,
  'horizontal-align-right': true,
  hourglass: true,
  import: true,
  info: true,
  'info-circle': true,
  k6: true,
  'key-skeleton-alt': true,
  keyboard: true,
  'layer-group': true,
  'layers-alt': true,
  'library-panel': true,
  'line-alt': true,
  link: true,
  'list-ui-alt': true,
  'list-ul': true,
  'list-ol': true,
  lock: true,
  'map-marker': true,
  message: true,
  minus: true,
  'minus-circle': true,
  'mobile-android': true,
  monitor: true,
  palette: true,
  'panel-add': true,
  'pathfinder-unite': true,
  pause: true,
  pen: true,
  percentage: true,
  play: true,
  plug: true,
  plus: true,
  'plus-circle': true,
  'plus-square': true,
  power: true,
  'presentation-play': true,
  process: true,
  'question-circle': true,
  'record-audio': true,
  repeat: true,
  rocket: true,
  'ruler-combined': true,
  save: true,
  search: true,
  'search-minus': true,
  'search-plus': true,
  'share-alt': true,
  shield: true,
  'shield-exclamation': true,
  signal: true,
  signin: true,
  signout: true,
  sitemap: true,
  slack: true,
  'sliders-v-alt': true,
  'sort-amount-down': true,
  'sort-amount-up': true,
  'square-shape': true,
  star: true,
  'step-backward': true,
  'stopwatch-slash': true,
  sync: true,
  'sync-slash': true,
  table: true,
  'tag-alt': true,
  'telegram-alt': true,
  'text-fields': true,
  'thumbs-up': true,
  times: true,
  'times-circle': true,
  'toggle-on': true,
  'toggle-off': true,
  'trash-alt': true,
  unlock: true,
  upload: true,
  user: true,
  'users-alt': true,
  'user-arrows': true,
  'vertical-align-bottom': true,
  'vertical-align-center': true,
  'vertical-align-top': true,
  'wrap-text': true,
  rss: true,
  x: true,
};

export type IconName = keyof typeof availableIconsIndex;

export function isIconName(iconName: unknown): iconName is IconName {
  if (!iconName || typeof iconName !== 'string') {
    return false;
  }

  return iconName in availableIconsIndex;
}

export function toIconName(iconName: string): IconName | undefined {
  if (isIconName(iconName)) {
    return iconName;
  }

  return undefined;
}
