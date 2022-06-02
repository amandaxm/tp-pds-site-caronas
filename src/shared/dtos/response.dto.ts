interface IResponseDTO {
  code: number;
  message: string;
  hasError?: boolean;
  data?: object;
}

export { IResponseDTO };
