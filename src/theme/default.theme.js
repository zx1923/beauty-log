
const Color = {
  primary: '#7658ef',
  error: '#eb4d38',
  warn: '#ff9c00',
  success: '#1f9b24',
  gray: '#666',
  info: '#00a2ff',
  dark: '#464a53',
  light: '#ffffff',
};

const commonStyle = {
  color: 'white',
  padding: '2px 6px',
};

const msgCommonStyle = {
  padding: '2px 6px',
  marginRight: '5px',
  background: Color.light,
};

const datatypeCommonStyle = {
  background: Color.light,
  fontWeight: 'bold',
  textDecoration: 'underline',
  padding: '2px 0 2px 2px',
};

export const defaultTheme = {
  datetime: {
    'default': {
      background: Color.gray,
      ...commonStyle,
    },
    'error': {
      background: Color.error,
      ...commonStyle,
    },
  },
  msg: {
    'default': {
      color: Color.dark,
      ...msgCommonStyle,
    },
    'error': {
      color: Color.error,
      ...msgCommonStyle,
    },
    'warn': {
      color: Color.warn,
      ...msgCommonStyle,
    },
    'success': {
      color: Color.success,
      ...msgCommonStyle,
    },
    'info': {
      color: Color.info,
      ...msgCommonStyle,
    },
  },
  map: {
    key: {
      background: Color.dark,
      ...commonStyle,
    },
    value: {
      background: Color.primary,
      ...commonStyle,
    }
  },
  datatype: {
    'default': {
      color: Color.dark,
      ...datatypeCommonStyle,
    },
    'error': {
      color: Color.error,
      ...datatypeCommonStyle,
    },
    'warn': {
      color: Color.warn,
      ...datatypeCommonStyle,
    },
    'success': {
      color: Color.success,
      ...datatypeCommonStyle,
    },
    'info': {
      color: Color.info,
      ...datatypeCommonStyle,
    },
  },
};