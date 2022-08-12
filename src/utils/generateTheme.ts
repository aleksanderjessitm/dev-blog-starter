import { config } from '../../config'
import { darken, lighten } from 'polished';



export function returnTheme() {
    return {
        primaryColor: {
            light: lighten(0.3, config.mainColor),
            normal: config.mainColor,
            dark: darken(0.5, config.mainColor)
        },
        secondaryColor: {
            light: lighten(0.3, config.secondaryColor),
            normal: config.mainColor,
            dark: darken(0.5, config.secondaryColor)
        },
        tertiaryColor: {
            light: lighten(0.3, config.tertiaryColor),
            normal: config.tertiaryColor,
            dark: darken(0.5, config.tertiaryColor)
        },
        backgroundColor: {
            light: lighten(0.3, config.backgroundColor),
            normal: config.backgroundColor,
            dark: darken(0.5, config.backgroundColor)
        },
        errorColor: {
            light: lighten(0.3, config.backgroundColor),
            normal: config.errorColor,
            dark: darken(0.5, config.backgroundColor)
        }
    };

}