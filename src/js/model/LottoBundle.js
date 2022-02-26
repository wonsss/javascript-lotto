import LOTTO from '../constants/lotto.js';
import repeatCallback from '../utils/repeat.js';
import validateMoney from '../validator/moneyValidator.js';
import Lotto from './Lotto.js';

/**
 * @module model/LottoBundle
 */

/**
 * @class module:model/LottoBundle.LottoBundle
 * @classdesc 6개의 숫자로 이뤄진 로또 배열을 구입된 로또 개수만큼 가지는 로또 번들 모델
 */
export default class LottoBundle {
  #money = 0;

  #count = 0;

  #penny = 0;

  #lottos = [];

  /** @param {number} money 입력받은 돈 */
  setMoney(money) {
    if (validateMoney(money)) {
      this.#money = money;
    }
  }

  /** @type {number} */
  get money() {
    return this.#money;
  }

  /** 발행할 로또 개수를 저장한다 */
  setCount() {
    this.#count = Math.floor(this.#money / LOTTO.PRICE_PER_TICKET);
  }

  /** @type {number} */
  get count() {
    return this.#count;
  }

  /** 거슬러줄 잔돈을 저장한다 */
  setPenny() {
    this.#penny = this.#money - this.#count * LOTTO.PRICE_PER_TICKET;
  }

  /** @type {number} */
  get penny() {
    return this.#penny;
  }

  /** @type {array} */
  get lottos() {
    return this.#lottos;
  }

  /** 구입된 로또 개수만큼 로또를 만들어 저장한다 */
  createLottoBundle() {
    repeatCallback(this.#count, () => this.#pushLottoToBundle());
  }

  /** @method pushLottoToBundle
   * @description 로또 티켓 한 장의 번호 배열을 로또 번들 배열에 넣는다.
   */
  #pushLottoToBundle() {
    const lotto = new Lotto();
    this.#lottos.push(lotto);
  }
}
