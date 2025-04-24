def tinhdiemtrungbinh(danhsachdiem):

    tongdiem = sum(danhsachdiem)

    soluongdiem = len(danhsachdiem)
    diemcuoi = danhsachdiem[-1]

    diemtrungbinh = (tongdiem + diemcuoi) / (soluongdiem + 1)

    print(f"Điểm trung bình: {round(diemtrungbinh, 1)}")

danhsachdiem = [9, 6, 10, 7]
tinhdiemtrungbinh(danhsachdiem)
