const NETWORK_ERROR = 'NetworkError';

class NetworkError extends Error {
  type: string = NETWORK_ERROR;
  message!: string;
  cause: string;

  constructor(json: Record<string, any>) {
    super(
      'There was an error connecting to the server.  Are you connected to the internet?',
    );
    this.cause = json.message;
  }
}

export { NETWORK_ERROR };
export default NetworkError;
