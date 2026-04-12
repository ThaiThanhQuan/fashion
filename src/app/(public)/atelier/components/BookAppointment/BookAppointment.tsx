function BookAppointment() {
  return (
    <div className="py-(--padding-y)">
      <div className="grid grid-cols-2 gap-12">
        <div className="flex flex-col">
          <h2 className="text-4xl font-bold tracking-tighter uppercase mb-12">
            lên lịch hẹn
          </h2>

          <div>
            <label
              htmlFor=""
              className="text-xs uppercase tracking-widest font-bold block mb-4"
            >
              Thời Gian Khả Dụng
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookAppointment;
