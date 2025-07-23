// src/theme/theme.ts
import type { ThemeConfig } from 'antd';

export const oxleyColors = {
    oxley50: '#f5f8f6',
    oxley100: '#dee9e4',
    oxley200: '#bcd3c8',
    oxley300: '#92b6a5',
    oxley400: '#799f8f',
    oxley500: '#517b6a',
    oxley600: '#406154',
    oxley700: '#364f46',
    oxley800: '#2e413a',
    oxley900: '#293833',
    oxley950: '#141f1c',
};

export const theme: ThemeConfig = {
    token: {
        colorPrimary: oxleyColors.oxley500,
        colorInfo: oxleyColors.oxley500,
        colorSuccess: '#52c41a',
        colorWarning: '#faad14',
        colorError: '#ff4d4f',
        colorLink: oxleyColors.oxley600,
        colorTextBase: oxleyColors.oxley900,
        colorBgBase: '#ffffff',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
    },
    components: {
        Button: {
            colorPrimary: oxleyColors.oxley500,
            algorithm: true,
        },
        Menu: {
            colorItemBgSelected: oxleyColors.oxley50,
            colorItemTextSelected: oxleyColors.oxley600,
        },
        Card: {
            colorBorderSecondary: oxleyColors.oxley200,
        },
    },
};