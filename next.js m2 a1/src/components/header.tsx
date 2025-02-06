import Link from "next/link"

const header = () => {
  return (
    <div className="header">
      <h1>Moiz Iqbal</h1>
      <div className="nav">
        <Link href="/"><div>Home</div></Link>
        <Link href="/blog"><div>Blog</div></Link>
        <Link href="/contact"><div>Contact</div></Link>
      </div>
    </div>
  )
}

export default header