import { AuthenticatedUser } from '@/interface/user';

export interface ApplicationConfig {
  user: AuthenticatedUser;
  auth: {
    token: string;
  };
  'theiconicapp': {
    stream: ExternalApiConfig;
    media: ExternalApiConfig;
    transport: ExternalApiConfig;
    productregistry: ExternalApiConfig;
    erpgateway: ExternalApiConfig;
    operator: ExternalApiConfig;
    troubleshooting: ExternalApiConfig;
    picking: ExternalApiConfig;
  };
}

interface ExternalApiConfig {
  host: string;
  token?: string;
}

// The config described here is injected to the window object by
// the dashboard app. Dashboard app is the parent app where this
// react application resides in production.

export const getApplicationConfig = (): ApplicationConfig => ((window as any).config!!
  ? (window as any).config as ApplicationConfig : {} as ApplicationConfig);

export const getTransportHost = (): string => getApplicationConfig()['theiconicapp'].transport.host;

export const getProductRegistryHost = (): string => getApplicationConfig()['theiconicapp'].productregistry.host;

export const getERPGatewayHost = (): string => getApplicationConfig()['theiconicapp'].erpgateway.host;

export const getOperatorHost = (): string => getApplicationConfig()['theiconicapp'].operator.host;

export const getTroubleshootingHost = (): string => getApplicationConfig()['theiconicapp'].troubleshooting.host;

export const getTroubleshootingToken = (): string => getApplicationConfig()['theiconicapp'].troubleshooting?.token
  || '';

export const getStreamHost = (): string => getApplicationConfig()['theiconicapp'].stream.host;

export const getPickingHost = (): string => getApplicationConfig()['theiconicapp'].picking.host;

export const getLoggedUser = (): AuthenticatedUser => getApplicationConfig().user;
