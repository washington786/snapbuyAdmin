// src/theme/types.ts
export type OxleyColorShades =
    | 'oxley50'
    | 'oxley100'
    | 'oxley200'
    | 'oxley300'
    | 'oxley400'
    | 'oxley500'
    | 'oxley600'
    | 'oxley700'
    | 'oxley800'
    | 'oxley900'
    | 'oxley950';

declare module '@ant-design/cssinjs' {
    interface DerivativeToken {
        oxleyColors: Record<OxleyColorShades, string>;
    }
}