import Pagination from '../components/Pagination';
const INIT_URL = '/products?page=1';

export default function Products() {
  return <Pagination INIT_URL={INIT_URL} />;
}
