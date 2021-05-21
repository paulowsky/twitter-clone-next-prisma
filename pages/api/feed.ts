import prisma from '../../db/prisma'

export default async (req, res) => {
    const tweets = await prisma.tweet.findMany({
        orderBy: { createdAt: 'desc' },
        include: { author: { select: { username: true, id: true } } }
    })
    res.json(tweets)
}
