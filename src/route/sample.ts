import * as express from 'express'

const router = express.Router()
const waitMs: number = 2000

/**
 * POST
 */
router.post(
  '/',
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    setTimeout(
      () =>
        res.status(200).json({
          hoge: req.body.hoge,
          method: 'POST'
        }),
      waitMs
    )
  }
)

/**
 * GET
 */
router.get(
  '/',
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    setTimeout(
      () =>
        res.status(200).json({
          method: 'GET'
        }),
      waitMs
    )
  }
)

router.get(
  '/:hoge',
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    setTimeout(
      () =>
        res.status(200).json({
          hoge: req.params.hoge,
          method: 'GET'
        }),
      waitMs
    )
  }
)

/**
 * DELETE
 */
router.delete(
  '/',
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    setTimeout(
      () =>
        res.status(200).json({
          method: 'DELETE'
        }),
      waitMs
    )
  }
)

router.delete(
  '/:hoge',
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    setTimeout(
      () =>
        res.status(200).json({
          hoge: req.params.hoge,
          method: 'DELETE'
        }),
      waitMs
    )
  }
)

/**
 * PUT
 */
router.put(
  '/',
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    setTimeout(
      () =>
        res.status(200).json({
          hoge: req.body.hoge,
          method: 'PUT'
        }),
      waitMs
    )
  }
)

router.put(
  '/:hoge',
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    setTimeout(
      () =>
        res.status(200).json({
          hoge: req.params.hoge,
          method: 'PUT'
        }),
      waitMs
    )
  }
)

/**
 * PATCH
 */
router.patch(
  '/',
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    setTimeout(
      () =>
        res.status(200).json({
          hoge: req.body.hoge,
          method: 'PATCH'
        }),
      waitMs
    )
  }
)

router.patch(
  '/:hoge',
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    setTimeout(
      () =>
        res.status(200).json({
          hoge: req.params.hoge,
          method: 'PATCH'
        }),
      waitMs
    )
  }
)

export default router
