import LottoController from './js/controller/LottoController.js';
import './css/index.css';
import LottoBundle from './js/model/LottoBundle.js';
import PurchaseView from './js/view/PurchaseView.js';
import IssuedTicketView from './js/view/IssuedTicketView.js';
import LottoResult from './js/model/LottoResult.js';

window.addEventListener('DOMContentLoaded', () => {
  const lottoBundle = new LottoBundle();
  const lottoResult = new LottoResult(lottoBundle);
  const purchaseView = new PurchaseView(lottoBundle);
  const issuedTicketView = new IssuedTicketView(lottoBundle);
  const controller = new LottoController(
    lottoBundle,
    purchaseView,
    issuedTicketView,
    lottoResult,
  );
});
