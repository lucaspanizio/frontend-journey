export const dark = {
  name: 'dark',
  colors: {
    primary: '#a3e635',
    secondary: '#333',
    error: '#FF4C4C',
    warning: '#FFA500',
    success: '#4CAF50',
    transparent: 'rgba(0,0,0,0)',
    background: '#121212',
    backgroundAccent: '#1E1E1E',
    text: '#FFFFFF',
  },
  shadow: '0px 4px 8px rgba(0, 0, 0, 0.15)',
  radius: {
    sm: '4px',
    md: '8px',
    lg: '16px',
  },
  breakPoints: {
    sm: '480px',
    md: '768px',
    lg: '1024px',
  },
  components: {
    errorBoundary: {
      backdropColor: 'rgba(0, 0, 0, 0.8)',
      modalBackground: '#1C1C1E',
      headerBorderTop: '#FA473B',
      closeButtonColor: '#A8A29E',
      messageText: '#FA473B',
      messageBorder: '#FA473B',
      messageBackground: '#2A1E1E',
      sourceBackground: '#111111',
      sourceText: '#C6C7B8',
      stackText: '#C6C7B8',
      preBackground: '#1E1E1E',
    },
  },
}

export const light: ThemeType = {
  ...dark,
  name: 'light',
  colors: {
    primary: '#a3e635',
    secondary: '#F0F0F0',
    error: '#D32F2F',
    warning: '#FF9800',
    success: '#388E3C',
    transparent: 'rgba(255,255,255,0)',
    background: '#E0E0E0',
    backgroundAccent: '#F7F7F7',
    text: '#000000',
  },
  components: {
    errorBoundary: {
      backdropColor: 'rgba(0, 0, 0, 0.8)',
      modalBackground: '#FFFFFF',
      headerBorderTop: '#FA473B',
      closeButtonColor: '#A8A29E',
      messageText: '#FA473B',
      messageBorder: '#FA473B',
      messageBackground: '#F1F1F1',
      sourceBackground: '#FFFFFF',
      sourceText: '#6B6B6B',
      stackText: '#6B6B6B',
      preBackground: '#F1F1F1',
    },
  },
}

export const green: ThemeType = {
  ...dark,
  name: 'unimed',
  colors: {
    primary: '#018755',
    secondary: '#005B3C',
    error: '#D32F2F',
    warning: '#FFC107',
    success: '#4CAF50',
    transparent: 'rgba(0,0,0,0)',
    background: '#018744',
    backgroundAccent: '#CFE9E0',
    text: '#00331D',
  },
  components: {
    errorBoundary: {
      backdropColor: 'rgba(0, 0, 0, 0.8)',
      modalBackground: '#FFFFFF',
      headerBorderTop: '#FA473B',
      closeButtonColor: '#A8A29E',
      messageText: '#FA473B',
      messageBorder: '#FA473B',
      messageBackground: '#F1F1F1',
      sourceBackground: '#FFFFFF',
      sourceText: '#6B6B6B',
      stackText: '#6B6B6B',
      preBackground: '#F1F1F1',
    },
  },
}

export const orange: ThemeType = {
  ...dark,
  name: 'you_saude',
  colors: {
    primary: '#F77B13',
    secondary: '#CC5C0D',
    error: '#D32F2F',
    warning: '#FFC107',
    success: '#4CAF50',
    transparent: 'rgba(0,0,0,0)',
    background: '#F99A22',
    backgroundAccent: '#FFE0BF',
    text: '#6B3A00',
  },
  components: {
    errorBoundary: {
      backdropColor: 'rgba(0, 0, 0, 0.8)',
      modalBackground: '#FFFFFF',
      headerBorderTop: '#FA473B',
      closeButtonColor: '#A8A29E',
      messageText: '#FA473B',
      messageBorder: '#FA473B',
      messageBackground: '#F1F1F1',
      sourceBackground: '#FFFFFF',
      sourceText: '#6B6B6B',
      stackText: '#6B6B6B',
      preBackground: '#F1F1F1',
    },
  },
}

export const themes = { light, dark, green, orange } as const
export type ThemeType = typeof dark
export type ThemeOption = keyof typeof themes
