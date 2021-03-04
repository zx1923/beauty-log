
const Color = {
    primary: '#7658ef',
    danger: '#eb4d38',
    warn: '#ff9c00',
    success: '#1f9b24',
    gray:  '#666',
    info: '#00a2ff',
    dark: '#464a53',
    light: '#f8f8f8'
}

const Theme = {
    datetime: {
        default: `background:${Color.gray};color:white;padding:2px 6px;`,
        error: `background:${Color.danger};color:white;padding:2px 6px;`,
        warn:`background:${Color.warn};color:white;padding:2px 6px;`
    },
    msg: {
        default: `background:${Color.light};color:${Color.dark};padding:2px 6px;margin-right:5px;`,
        error: `background:${Color.light};color:${Color.danger};padding:2px 6px;margin-right:5px;`,
        warn: `background:${Color.light};color:${Color.warn};padding:2px 6px;margin-right:5px;`,
        success: `background:${Color.light};color:${Color.success};padding:2px 6px;margin-right:5px;`,
        info: `background:${Color.light};color:${Color.info};padding:2px 6px;margin-right:5px;`,
    },
    key: `background:${Color.dark};color:white;padding:2px 6px;`,
    value: `background:${Color.primary};color:white;padding:2px 6px;`,
    datatype: {
        default: `background:${Color.light};color:${Color.dark};font-weight:bold;text-decoration:underline;padding:2px 0 2px 2px;`,
        error: `background:${Color.light};color:${Color.danger};font-weight:bold;text-decoration:underline;padding:2px 0 2px 2px;`,
        warn: `background:${Color.light};color:${Color.warn};font-weight:bold;text-decoration:underline;padding:2px 0 2px 2px;`,
        success: `background:${Color.light};color:${Color.success};font-weight:bold;text-decoration:underline;padding:2px 0 2px 2px;`,
        info: `background:${Color.light};color:${Color.info};font-weight:bold;text-decoration:underline;padding:2px 0 2px 2px;`,
    },
}

module.exports = Theme;