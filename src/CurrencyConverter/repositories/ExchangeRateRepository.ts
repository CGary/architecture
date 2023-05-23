import { IExchangeRateRepository } from "../interfaces/IExchangeRateRepository";
import { IExchangeRateService } from "../interfaces/IExchangeRateService";
import { ExchangeRate } from "../entities/ExchangeRate";

export class ExchangeRateRepository implements IExchangeRateRepository {
  constructor(private exchangeRateService: IExchangeRateService) {}

  async getExchangeRate(): Promise<ExchangeRate> {
    return await this.exchangeRateService.fetchExchangeRate();
  }
}
