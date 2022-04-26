import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  const { di } = router.query

  return <div>{di}</div>;
}
