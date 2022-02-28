/* eslint-disable max-lines-per-function */
/* eslint-disable max-depth */
export default class LottoResult {
  constructor(lottoBundle) {
    this.lottoBundle = lottoBundle;
  }

  #winningNumbers = { basicNumbers: [], bonusNumber: 0 }; // { basicNumbers: [1,2,3,4,5,6], bonusNumber: 7 }

  #winningCounts = { three: 0, four: 0, five: 0, fiveBonus: 0, six: 0 };

  #yield = 0;

  // numbers = [1,2,3,4,5,6,7]
  set winningNumbers(numbers) {
    this.#winningNumbers = {
      basicNumbers: numbers.slice(0, 6),
      bonusNumber: numbers[6],
    };
  }

  get winningCounts() {
    return this.#winningCounts;
  }

  calculateWinningCounts() {
    const { lottos } = this.lottoBundle;

    let three = 0;
    let four = 0;
    let five = 0;
    let fiveBonus = 0;
    let six = 0;

    lottos.forEach((lotto) => {
      switch (this.countLottoNumbers(lotto)) {
        case 3:
          three += 1;
          break;
        case 4:
          four += 1;
          break;
        case 5:
          five += 1;
          break;
        case 'fiveBonus':
          fiveBonus += 1;
          break;
        case 6:
          six += 1;
          break;
        default:
          break;
      }
    });

    this.#winningCounts = { three, four, five, fiveBonus, six };
  }

  countLottoNumbers(lotto) {
    let count = 0;
    const { basicNumbers } = this.#winningNumbers;
    const { bonusNumber } = this.#winningNumbers;
    for (let i = 0; i <= 5; i += 1) {
      for (let j = 0; j <= 5; j += 1) {
        if (lotto[i] === basicNumbers[j]) {
          count += 1;
        }
      }
    }
    if (count === 5) {
      for (let i = 0; i < 6; i += 1) {
        if (lotto[i] === bonusNumber) {
          return 'fiveBonus';
        }
      }
    }

    return count;
  }
}
