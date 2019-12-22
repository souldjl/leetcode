import judgeCircle from '../code/move'

test('UD should be true', ()=> {
    expect(judgeCircle('UD')).toBe(true)
})

test('UU should be true', ()=> {
    expect(judgeCircle('UU')).toBe(false)
})