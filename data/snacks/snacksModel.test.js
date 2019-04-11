const db = require('../dbconfig');
const snacks = require('./snacksModel');



describe('snacks model', () => {
    afterEach(() => db('snacks').truncate())

    describe('insert()', () => {
        test('should insert provided snack', async () => {
            let snack = await snacks.insert({name: 'Dried Fruits'});
            expect(snack).toEqual({
                id: 1,
                name: 'Dried Fruit'
            })

            snack = await snacks.insert({name: 'Granola'});
            expect(snack).toEqual({
                id: 2,
                name: 'Granola'
            })

            const allSnacks = await db('snacks');
            expect(allSnacks).toHaveLength(2);
        })
    })

    describe('getAll()', () => {
        test('should get All snacks', async () => {
            await snacks.insert({name: 'Dried Fruits'});
            await snacks.insert({name: 'Granola'});

            const allSnacks = await snacks.getAll()
            expect(allSnacks).arrayContaining([
                {
                    id: 1,
                    name: 'Dried Fruits'
                },
                {
                    id: 2,
                    name: 'Granola'
                }
            ])

        })
    })

    describe('remove()', () => {
        test('should remove snack with given id', async () => {
            await snacks.insert({name: 'Dried Fruits'});
            await snacks.insert({name: 'Granola'});

            const id = 1
            await snacks.remove(id)
            
            const removedSnack = await snacks.findBy({id})
            expect(removedSnack).toBeNull()
        })
    })
})