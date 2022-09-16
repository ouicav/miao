var ouicav = function() {

  function compact(ary) {
    let newArray = []
    for (let i = 0; i < ary.length; i++) {
      if (ary[i]) {
        newArray.push(ary[i])
      }
    }
    return newArray
  }


  function chunk(ary, size = 1) {
    let newArray = []
    let tempArray = []
    let count = 0

    for (let i = 0; i < ary.length; i++) {
      tempArray.push(ary[i])    //遍历数组，把每一项添加到temp
      count++
      if (count === size || i === ary.length - 1) {   // 当count等于size时，需要截取size的长度
        newArray.push(tempArray)    // 将已有的temp添加到new数组
        tempArray = []    // 将temp清空，重新遍历
        count = 0
      }
    }
    return newArray
  }


  function fill(ary, value, start = 0, end = ary.length) {
    // 从start开始遍历，到end结束
    for (let i = start; i < end; i++) {
    // 将value的值赋给数组的每一项
      ary[i] = value
    }
    return ary
  }


  function drop(ary, n = 1) {
    let newArray = []
    // 从n开始遍历，进行截取并添加到新数组
    for (let i = n; i < ary.length; i++) {
      newArray.push(ary[i])
    }
    return newArray
  }
  // 方法二：shift删除
  // function drop(ary, n = 1) {
  //   for (let i = 0; i < n; i++) {
  //     ary.shift(ary[i])
  //   }
  //   return ary
  // }


  function flatten(ary) {
    let newArray = []
    for (let i = 0; i < ary.length; i++) {
      let item = ary[i]
      newArray = newArray.concat(item)
    }
    return newArray
  }


  function flattenDeep(ary) {
    let newArray = []
    for (let i = 0; i < ary.length; i++) {
      if (Array.isArray(ary[i])) {
        newArray = newArray.concat(flattenDeep(ary[i]))
      } else {
        newArray = newArray.concat(ary[i])
      }
    }
    return newArray
  }


  function flattenDepth(ary, depth = 1) {
    if (depth === 0) {
      return ary
    }

    let newArray = []

    for (let i = 0; i < ary.length; i++) {
      if (Array.isArray(ary[i]) && depth >= 1) {
        newArray = newArray.concat(flattenDepth(ary[i], depth - 1))
      } else {
        newArray = newArray.concat(ary[i])
      }
    }
    return newArray
  }



  function fromPairs(pairs) {
    let newObj = {}
    for (let item of pairs) {
      let key = item[0]
      let val = item[1]
      newObj[key] = val
    }
    return newObj
  }



  function head(ary) {
    if (ary.length === 0) {
      return undefined
    } else {
      return ary[0]
    }
  }


  function indexOf(ary, value, fromIndex = 0) {
    for (let i = fromIndex; i < ary.length; i++) {
      if (ary[i] === value) {
        return i
      }
    }
    return -1
  }


  function lastIndexOf(ary, value, fromIndex = ary.length - 1) {
    for (let i = fromIndex; i >= 0; i--) {
      if (ary[i] === value) {
        return i
      }
    }
    return -1
  }


  function initial(ary) {
    return ary.splice(0, ary.length - 1)
  }


  function join(ary, separator = ',') {
    let newStr = ''
    for (let i = 0; i < ary.length; i++) {
      // 最后一个元素不需要加分隔符
      if (i === ary.length - 1) {
        newStr += ary[i]
      } else {
        // 其余每个元素后需添加分隔符
        newStr = newStr + ary[i] + separator
      }
    }
    return newStr
  }


  function last(ary) {
    if (ary.length === 0) {
      return undefined
    } else {
      return ary[ary.length - 1]
    }
  }


  // function pull(ary, ...values) {
  //   let newArray = []
  //   for (let i = 0; i < ary.length; i++) {
  //     if (!(values.includes(ary[i]))) {
  //       newArray.push(ary[i])
  //     }
  //   }
  //   return newArray
  // }

  function pull(ary, ...values) {
    // 修改原数组的情况
    for (let i = 0; i < ary.length; i++) {
      // 把ary的每一项去判断是否存在value里
      if (values.includes(ary[i])) {
        // 从下标为i的位置开始，删除一个元素
        ary.splice(i, 1)
        // 由于元素被删除了一个，循环次数减1
        i--
      }
    }
    return ary
  }


  function reverse(ary) {
    let left = 0  // 左指针
    let right = ary.length - 1  // 右指针
    while (left < right) {
      let temp = ary[left]
      ary[left] = ary[right]
      ary[right] = temp

      left++
      right--
    }
    return ary
  }




  return {
    compact,
    chunk,
    fill,
    drop,
    flatten,
    flattenDeep,
    flattenDepth,
    fromPairs,
    head,
    indexOf,
    lastIndexOf,
    initial,
    join,
    last,
    pull,
    reverse,
  }

}()
